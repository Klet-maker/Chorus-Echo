'use server';

import { getRatingSummary, addRating } from '@/services/rating-service';

export async function getRatingSummaryAction() {
  return await getRatingSummary();
}

export async function submitRatingAction(rating: number) {
  if (rating < 1 || rating > 5) {
    throw new Error('Invalid rating value.');
  }
  return await addRating(rating);
}
