const CONTACT_CONVERSION_SEND_TO = "AW-17943402139/Jb7dCMu2o_YbEJutiuxC";

export function trackContactConversion() {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "conversion", {
      send_to: CONTACT_CONVERSION_SEND_TO
    });
  }
}
