function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  // Ensure nums1 is the smaller array to binary search on it
  let A = nums1, B = nums2;
  if (A.length > B.length) [A, B] = [B, A];

  const m = A.length, n = B.length;
  const total = m + n;
  const half = Math.floor((total + 1) / 2);

  let lo = 0, hi = m;

  const NEG_INF = Number.NEGATIVE_INFINITY;
  const POS_INF = Number.POSITIVE_INFINITY;

  while (lo <= hi) {
    const i = Math.floor((lo + hi) / 2); // cut in A
    const j = half - i;                  // cut in B

    const Aleft  = i > 0 ? A[i - 1] : NEG_INF;
    const Aright = i < m ? A[i]     : POS_INF;

    const Bleft  = j > 0 ? B[j - 1] : NEG_INF;
    const Bright = j < n ? B[j]     : POS_INF;

    // Correct partition found
    if (Aleft <= Bright && Bleft <= Aright) {
      const leftMax = Math.max(Aleft, Bleft);
      if (total % 2 === 1) return leftMax;

      const rightMin = Math.min(Aright, Bright);
      return (leftMax + rightMin) / 2;
    }

    // Move partition
    if (Aleft > Bright) {
      hi = i - 1; // i too big
    } else {
      lo = i + 1; // i too small
    }
  }

  // Should be unreachable for valid inputs
  throw new Error("Invalid input");
}
