import { describe, it, expect } from 'vitest';
import {
  getStatusInfo,
  getEstimatedTimeline,
  isActiveShowing,
  isPendingRequest,
  ShowingStatus,
} from './showingStatus';

describe('showingStatus utilities', () => {
  it('getStatusInfo returns correct label and color for known statuses', () => {
    const cases: [ShowingStatus, string, string][] = [
      ['submitted', 'Submitted', 'text-blue-800'],
      ['confirmed', 'Confirmed', 'text-green-800'],
    ];

    for (const [status, label, color] of cases) {
      const info = getStatusInfo(status);
      expect(info.label).toBe(label);
      expect(info.color).toBe(color);
    }
  });

  it('getEstimatedTimeline falls back to pending timeline for unknown status', () => {
    const unknown = 'unknown' as ShowingStatus;
    const timeline = getEstimatedTimeline(unknown);
    expect(timeline).toBe('');
  });

  it('isActiveShowing identifies confirmed, agent_confirmed, scheduled or in_progress statuses', () => {
    expect(isActiveShowing('confirmed')).toBe(true);
    expect(isActiveShowing('agent_confirmed')).toBe(true);
    expect(isActiveShowing('scheduled')).toBe(true);
    expect(isActiveShowing('in_progress')).toBe(true);
    expect(isActiveShowing('submitted')).toBe(false);
  });

  it('isPendingRequest identifies submitted, under_review and pending statuses', () => {
    expect(isPendingRequest('submitted')).toBe(true);
    expect(isPendingRequest('under_review')).toBe(true);
    expect(isPendingRequest('pending')).toBe(true);
    expect(isPendingRequest('confirmed')).toBe(false);
  });
});
