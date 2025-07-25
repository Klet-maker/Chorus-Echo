import { db } from '@/lib/firebase';
import { doc, getDoc, runTransaction, DocumentReference, DocumentSnapshot } from 'firebase/firestore';

export interface RatingSummary {
  totalReviews: number;
  totalRatingSum: number;
  averageRating: number;
}

const summaryDocRef = doc(db, 'ratings', 'summary');

// Gets the current ratings summary
export async function getRatingSummary(): Promise<RatingSummary> {
  try {
    const docSnap = await getDoc(summaryDocRef);

    if (docSnap.exists()) {
      const data = docSnap.data();
      const totalReviews = data.totalReviews || 0;
      const totalRatingSum = data.totalRatingSum || 0;
      return {
        totalReviews,
        totalRatingSum,
        averageRating: totalReviews > 0 ? totalRatingSum / totalReviews : 0,
      };
    } else {
      // If the document doesn't exist, initialize it with 0 values
      return { totalReviews: 0, totalRatingSum: 0, averageRating: 0 };
    }
  } catch (error) {
    console.error("Error fetching rating summary: ", error);
    // On error, return a default state to prevent app crash
    return { totalReviews: 0, totalRatingSum: 0, averageRating: 0 };
  }
}

// Adds a new rating and updates the summary in a transaction
export async function addRating(newRating: number): Promise<RatingSummary> {
  try {
    const newSummary = await runTransaction(db, async (transaction) => {
      const summaryDoc = await transaction.get(summaryDocRef);
      
      let currentTotalReviews = 0;
      let currentTotalRatingSum = 0;

      if (summaryDoc.exists()) {
        currentTotalReviews = summaryDoc.data().totalReviews || 0;
        currentTotalRatingSum = summaryDoc.data().totalRatingSum || 0;
      }

      const newTotalReviews = currentTotalReviews + 1;
      const newTotalRatingSum = currentTotalRatingSum + newRating;
      
      const updatedSummary = {
        totalReviews: newTotalReviews,
        totalRatingSum: newTotalRatingSum,
      };

      transaction.set(summaryDocRef, updatedSummary, { merge: !summaryDoc.exists() });
      
      return {
        ...updatedSummary,
        averageRating: newTotalReviews > 0 ? newTotalRatingSum / newTotalReviews : 0,
      };
    });
    return newSummary;
  } catch (error) {
    console.error("Error adding rating in transaction: ", error);
    throw new Error('Failed to submit rating.');
  }
}
