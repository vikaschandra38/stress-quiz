/**
 * Google Tag Manager Integration
 * Tracks user interactions and quiz progress through GTM
 */

export const initGTM = () => {
  // Initialize GTM
  // In production, replace with your actual GTM ID
  const GTM_ID = 'GTM-XXXXXX'; // Replace with actual GTM ID

  if (typeof window !== 'undefined' && !window.dataLayer) {
    window.dataLayer = [];
  }

  // GTM script injection (if needed in production)
  // This is typically handled by adding the script in index.html
  // but we can add it programmatically here if needed
};

/**
 * Track events in GTM
 * @param {string} eventName - The name of the event
 * @param {object} eventData - Additional data to send with the event
 */
export const trackEvent = (eventName, eventData = {}) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: eventName,
      timestamp: new Date().toISOString(),
      ...eventData
    });

    // Also log to console in development
    if (import.meta.env.DEV) {
      console.log(`[GTM Event] ${eventName}:`, {
        timestamp: new Date().toISOString(),
        ...eventData
      });
    }
  }
};

/**
 * Track page views
 * @param {string} pageName - Name of the page
 * @param {string} pagePath - Path of the page
 */
export const trackPageView = (pageName, pagePath) => {
  trackEvent('page_view', {
    page_title: pageName,
    page_path: pagePath
  });
};

/**
 * Track quiz funnel stages
 * @param {number} stageNumber - The stage number in the funnel
 * @param {object} stageData - Additional stage data
 */
export const trackFunnelStage = (stageNumber, stageData = {}) => {
  trackEvent(`funnel_stage_${stageNumber}`, {
    funnel_stage: stageNumber,
    ...stageData
  });
};

/**
 * Track quiz completion
 * @param {number} totalQuestions - Total questions in the quiz
 * @param {object} results - Quiz results data
 */
export const trackQuizCompletion = (totalQuestions, results) => {
  trackEvent('quiz_completed', {
    total_questions: totalQuestions,
    ...results
  });
};
