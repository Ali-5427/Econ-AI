/**
 * Auto-generated entity types
 * Contains all CMS collection interfaces in a single file 
 */

/**
 * Collection ID: faqs
 * Interface for FrequentlyAskedQuestions
 */
export interface FrequentlyAskedQuestions {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  question?: string;
  /** @wixFieldType text */
  answer?: string;
  /** @wixFieldType text */
  category?: string;
  /** @wixFieldType number */
  displayOrder?: number;
  /** @wixFieldType boolean */
  isPublished?: boolean;
}


/**
 * Collection ID: howitworkssteps
 * Interface for HowItWorksSteps
 */
export interface HowItWorksSteps {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  title?: string;
  /** @wixFieldType text */
  description?: string;
  /** @wixFieldType image */
  icon?: string;
  /** @wixFieldType number */
  stepNumber?: number;
  /** @wixFieldType text */
  callToActionText?: string;
}


/**
 * Collection ID: pricingplans
 * Interface for PricingPlans
 */
export interface PricingPlans {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  tierName?: string;
  /** @wixFieldType number */
  price?: number;
  /** @wixFieldType text */
  priceUnit?: string;
  /** @wixFieldType text */
  description?: string;
  /** @wixFieldType text */
  features?: string;
  /** @wixFieldType text */
  callToActionText?: string;
  /** @wixFieldType url */
  callToActionUrl?: string;
  /** @wixFieldType boolean */
  isMostPopular?: boolean;
}


/**
 * Collection ID: productfeatures
 * Interface for ProductFeatures
 */
export interface ProductFeatures {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  title?: string;
  /** @wixFieldType text */
  shortDescription?: string;
  /** @wixFieldType text */
  description?: string;
  /** @wixFieldType image */
  icon?: string;
  /** @wixFieldType url */
  learnMoreUrl?: string;
  /** @wixFieldType boolean */
  isNew?: boolean;
}


/**
 * Collection ID: usecases
 * Interface for UseCases
 */
export interface UseCases {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  title?: string;
  /** @wixFieldType text */
  descriptionPoint1?: string;
  /** @wixFieldType text */
  descriptionPoint2?: string;
  /** @wixFieldType text */
  descriptionPoint3?: string;
  /** @wixFieldType image */
  illustration?: string;
}


/**
 * Collection ID: usertestimonials
 * Interface for UserTestimonials
 */
export interface UserTestimonials {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  testimonialQuote?: string;
  /** @wixFieldType text */
  userName?: string;
  /** @wixFieldType text */
  userTitleCompany?: string;
  /** @wixFieldType image */
  userPhoto?: string;
  /** @wixFieldType number */
  rating?: number;
  /** @wixFieldType date */
  testimonialDate?: Date | string;
}
