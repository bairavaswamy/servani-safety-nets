export const nearbyAreasMap: Record<string, string[]> = {
  "Indiranagar": ["Domlur", "Ulsoor", "MG Road", "CV Raman Nagar"],
  "Whitefield": ["Marathahalli", "Brookefield", "ITPL", "KR Puram"],
  "HSR Layout": ["BTM Layout", "Koramangala", "Electronic City"],
  "Marathahalli": ["Whitefield", "Bellandur", "Sarjapur Road"],
  "Electronic City": ["HSR Layout", "Bommasandra", "BTM Layout"],

  // fallback (important)
  DEFAULT: ["Indiranagar", "Whitefield", "HSR Layout", "Marathahalli"],
};