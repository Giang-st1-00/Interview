# Telex Pattern Counter

## Problem
Count how many Vietnamese Telex patterns can be formed from a string that contains only Latin letters (no spaces, no special characters).

Supported patterns:
- aw, aa, dd, ee, oo, ow
- w (standalone)

Example:

Input:
hwfdawhwhcoomddfgwdc

Output:
6 (w, aw, w, oo, dd, w)

---

## Solution Overview

The solution scans the input string once from left to right.

Key ideas:
- Validate input using regex to reject invalid characters
- Convert the string to lowercase for case-insensitive matching
- Use a Set for constant-time pattern lookup
- Manually control the index to prevent overlapping matches

When a 2-character pattern is found, the index moves forward by 2.
Otherwise, a standalone `w` is checked.

---

## Edge Cases Considered

- Empty input
- Invalid characters (numbers, special characters, spaces)
- Mixed uppercase and lowercase input
- Single-character input
- Overlapping patterns (e.g. `awow`)
- Consecutive matches (e.g. `aawaw`)
- Standalone `w` after a valid pair

---

## Complexity

- Time complexity: O(n)
- Space complexity: O(k), where k is the number of matched patterns

---

## How to Run

```
node interview.js
```

Enter the input string and press Enter.

---
