/**
 * Code generated by [commercetools RMF-Codegen](https://github.com/commercetools/rmf-codegen). DO NOT EDIT.
 * Please don't change this file manually but run `rmf-codegen generate raml_file_path -o output_path -t typescript_client` to update it.
 * For more information about the commercetools platform APIs, visit https://docs.commercetools.com/.
 */

import { Change } from './change'
import { KeyReference, Reference } from './common'
import { Label } from './label'

/**
 *	A Record captures the differences in a resource between one version and the next.
 *	(Recall that the version number is not always incremented by one; see [Optimistic Concurrency Control](/general-concepts#optimistic-concurrency-control).)
 *
 */
export interface Record {
  /**
   *	Version of the resource after the change.
   *
   */
  readonly version: number
  /**
   *	Version of the resource before the change.
   *
   */
  readonly previousVersion: number
  /**
   *	Type of the change (creation, update or deletion).
   *
   */
  readonly type: string
  /**
   *	Information about the user or the API client who performed the change.
   *
   */
  readonly modifiedBy: ModifiedBy
  /**
   *	Date and time when the change was made.
   *
   */
  readonly modifiedAt: string
  /**
   *	Information that describes the resource after the change.
   *
   */
  readonly label: Label
  /**
   *	Information that describes the resource before the change.
   *
   */
  readonly previousLabel: Label
  /**
   *	Shows the differences in the resource between `previousVersion` and `version`.
   *	The value is not identical to the actual array of update actions sent and is not limited to update actions (see, for example, [Optimistic  Concurrency Control](/general-concepts#optimistic-concurrency-control)).
   *
   *
   */
  readonly changes: Change[]
  /**
   *	Reference to the changed resource.
   *
   *
   */
  readonly resource: Reference
  /**
   *	References to the [Stores](ctp:api:type:Store) attached to the [Change](ctp:history:type:Change).
   *
   *
   */
  readonly stores: KeyReference[]
  /**
   *	`true` if no change was detected.
   *	The version number of the resource can be increased even without any change in the resource.
   *
   *
   */
  readonly withoutChanges: boolean
}
/**
 *	Response to a query request for [Record](#record).
 *
 */
export interface RecordPagedQueryResponse {
  /**
   *	Number of [results requested](/../api/general-concepts#limit).
   *
   *
   */
  readonly limit: number
  /**
   *	Actual number of results returned.
   *
   *
   */
  readonly count: number
  /**
   *	Total number of results matching the query.
   *	This number is an estimation and not [strongly consistent](/general-concepts#strong-consistency).
   *
   *
   */
  readonly total: number
  /**
   *	Number of [elements skipped](/../api/general-concepts#offset).
   *
   *
   */
  readonly offset: number
  /**
   *
   */
  readonly results: Record[]
}
/**
 *	This data type represents the supported resource types.
 *	The value must be one of the following:
 *
 */
export type ChangeHistoryResourceType =
  | 'cart-discount'
  | 'category'
  | 'channel'
  | 'customer'
  | 'customer-group'
  | 'discount-code'
  | 'inventory-entry'
  | 'key-value-document'
  | 'order'
  | 'payment'
  | 'product'
  | 'product-discount'
  | 'product-selection'
  | 'product-type'
  | 'quote'
  | 'quote-request'
  | 'review'
  | 'shopping-list'
  | 'staged-quote'
  | 'state'
  | 'store'
  | 'tax-category'
  | 'type'
  | 'zone'
/**
 *	This type consists of one enum value:
 *
 */
export type DateStringFilter = 'now'
export interface ErrorObject {
  /**
   *
   */
  readonly code: string
  /**
   *
   */
  readonly message: string
}
export interface ErrorResponse {
  /**
   *
   */
  readonly statusCode: number
  /**
   *
   */
  readonly message: string
  /**
   *
   */
  readonly error?: string
  /**
   *
   */
  readonly error_description?: string
  /**
   *
   */
  readonly errors?: ErrorObject[]
}
/**
 *	Information about the user or the API client who performed the change. This is a variant of
 *	[LastModifiedBy](/types#lastmodifiedby).
 *
 */
export interface ModifiedBy {
  /**
   *	[ID](/general-concepts#identifier) of the Merchant Center user who made the change.
   *	Present only if the change was made in the Merchant Center.
   *
   *
   */
  readonly id: string
  /**
   *	Indicates whether the change was made by a user or the API client with or without an
   *	[External user ID](/client-logging#external-user-ids).
   *
   *
   */
  readonly type: string
  /**
   *	[Reference](/types#reference) to the
   *	[Customer](/projects/customers#customer) who made the change. Present only if
   *	the change was made using a token from the [Password
   *	Flow](/authorization#password-flow).
   *
   *
   */
  readonly customer?: Reference
  /**
   *	Present only if the change was made using a token from an [Anonymous
   *	Session](/authorization#tokens-for-anonymous-sessions).
   *
   *
   */
  readonly anonymousId?: string
  /**
   *	[ID](/general-concepts#identifier) of the [API
   *	Client](/projects/api-clients#apiclient) that made the change. Present only if
   *	the change was made using an API Client.
   *
   *
   */
  readonly clientId?: string
  /**
   *	`true` if the change was made via Merchant Center or [ImpEx](https://impex.europe-west1.gcp.commercetools.com/).
   *
   *
   */
  readonly isPlatformClient: boolean
}
export type PlatformInitiatedChange =
  | 'changeLineItemName'
  | 'changeReviewRatingStatistics'
  | 'excludeAll'
  | 'setApplicationVersion'
  | 'setIsValid'
  | 'setVariantAvailability'
/**
 *	Values for the Source enumeration.
 */
export type Source = 'ApiClient' | 'ImpEx' | 'MerchantCenter'
export type UpdateType =
  | 'addAddress'
  | 'addAsset'
  | 'addAttributeDefinition'
  | 'addBillingAddressId'
  | 'addDelivery'
  | 'addEnumValue'
  | 'addExternalImage'
  | 'addFieldDefinition'
  | 'addInterfaceInteraction'
  | 'addItemShippingAddress'
  | 'addLineItem'
  | 'addLocalizedEnumValue'
  | 'addLocation'
  | 'addParcelToDelivery'
  | 'addPayment'
  | 'addPlainEnumValue'
  | 'addPrice'
  | 'addReturnInfo'
  | 'addRoles'
  | 'addShippingAddressId'
  | 'addTaxRate'
  | 'addTextLineItem'
  | 'addToCategory'
  | 'addTransaction'
  | 'addVariant'
  | 'changeAddress'
  | 'changeAmountPlanned'
  | 'changeAssetName'
  | 'changeAssetOrder'
  | 'changeAttributeConstraint'
  | 'changeAttributeName'
  | 'changeAttributeOrderByName'
  | 'changeCartDiscounts'
  | 'changeCartPredicate'
  | 'changeDescription'
  | 'changeEmail'
  | 'changeEnumKey'
  | 'changeEnumValueLabel'
  | 'changeEnumValueOrder'
  | 'changeFieldDefinitionOrder'
  | 'changeGroups'
  | 'changeInitial'
  | 'changeInputHint'
  | 'changeIsActive'
  | 'changeIsSearchable'
  | 'changeKey'
  | 'changeLabel'
  | 'changeLineItemQuantity'
  | 'changeLineItemsOrder'
  | 'changeLocalizedEnumValueLabel'
  | 'changeLocalizedEnumValueOrder'
  | 'changeMasterVariant'
  | 'changeName'
  | 'changeOrderHint'
  | 'changeOrderState'
  | 'changeParent'
  | 'changePaymentState'
  | 'changePlainEnumValueLabel'
  | 'changePredicate'
  | 'changePrice'
  | 'changeQuantity'
  | 'changeRequiresDiscountCode'
  | 'changeReviewRatingStatistics'
  | 'changeShipmentState'
  | 'changeSlug'
  | 'changeSortOrder'
  | 'changeStackingMode'
  | 'changeTarget'
  | 'changeTextLineItemName'
  | 'changeTextLineItemQuantity'
  | 'changeTextLineItemsOrder'
  | 'changeTransactionInteractionId'
  | 'changeTransactionState'
  | 'changeTransactionTimestamp'
  | 'changeType'
  | 'changeValue'
  | 'publish'
  | 'removeAddress'
  | 'removeAsset'
  | 'removeAttributeDefinition'
  | 'removeBillingAddressId'
  | 'removeDelivery'
  | 'removeEnumValues'
  | 'removeFieldDefinition'
  | 'removeFromCategory'
  | 'removeImage'
  | 'removeItemShippingAddress'
  | 'removeLineItem'
  | 'removeLocation'
  | 'removeParcelFromDelivery'
  | 'removePayment'
  | 'removePrice'
  | 'removeRoles'
  | 'removeShippingAddressId'
  | 'removeTaxRate'
  | 'removeTextLineItem'
  | 'removeVariant'
  | 'setAddress'
  | 'setAnonymousId'
  | 'setAssetCustomField'
  | 'setAssetCustomType'
  | 'setAssetDescription'
  | 'setAssetSources'
  | 'setAssetTags'
  | 'setAsssetKey'
  | 'setAttribute'
  | 'setAuthorName'
  | 'setBillingAddress'
  | 'setCartPredicate'
  | 'setCategoryOrderHint'
  | 'setCompanyName'
  | 'setCustomField'
  | 'setCustomLineItemCustomField'
  | 'setCustomLineItemCustomType'
  | 'setCustomLineItemShippingDetails'
  | 'setCustomType'
  | 'setCustomer'
  | 'setCustomerEmail'
  | 'setCustomerGroup'
  | 'setCustomerId'
  | 'setCustomerNumber'
  | 'setDateOfBirth'
  | 'setDefaultBillingAddress'
  | 'setDefaultShippingAddress'
  | 'setDeleteDaysAfterLastModification'
  | 'setDeliveryAddress'
  | 'setDeliveryItems'
  | 'setDescription'
  | 'setDiscountedPrice'
  | 'setDistributionChannels'
  | 'setExpectedDelivery'
  | 'setExternalId'
  | 'setFirstName'
  | 'setGeoLocation'
  | 'setImageLabel'
  | 'setInputTip'
  | 'setInterfaceId'
  | 'setKey'
  | 'setLanguages'
  | 'setLastName'
  | 'setLineItemCustomField'
  | 'setLineItemCustomType'
  | 'setLineItemShippingDetails'
  | 'setLocale'
  | 'setMaxApplications'
  | 'setMaxApplicationsPerCustomer'
  | 'setMetaDescription'
  | 'setMetaKeywords'
  | 'setMetaTitle'
  | 'setMethodInfoInterface'
  | 'setMethodInfoMethod'
  | 'setMethodInfoName'
  | 'setMiddleName'
  | 'setName'
  | 'setOrderNumber'
  | 'setParcelItems'
  | 'setParcelMeasurements'
  | 'setParcelTrackingData'
  | 'setPassword'
  | 'setProductPriceCustomField'
  | 'setProductPriceCustomType'
  | 'setProductVariantKey'
  | 'setRating'
  | 'setRestockableInDays'
  | 'setReturnPaymentState'
  | 'setReturnShipmentState'
  | 'setRoles'
  | 'setSalutation'
  | 'setSearchKeywords'
  | 'setShippingAddress'
  | 'setSku'
  | 'setSlug'
  | 'setStatusInterfaceCode'
  | 'setStatusInterfaceText'
  | 'setStore'
  | 'setStores'
  | 'setSupplyChannel'
  | 'setTarget'
  | 'setTaxCategory'
  | 'setText'
  | 'setTextLineItemCustomField'
  | 'setTextLineItemCustomType'
  | 'setTextLineItemDescription'
  | 'setTitle'
  | 'setTransitions'
  | 'setValidFrom'
  | 'setValidFromAndUntil'
  | 'setValidUntil'
  | 'setVariantAvailability'
  | 'setVatId'
  | 'transitionCustomLineItemState'
  | 'transitionLineItemState'
  | 'transitionState'
  | 'unpublish'
  | 'updateItemShippingAddress'
  | 'updateSyncInfo'
  | 'verifyEmail'
