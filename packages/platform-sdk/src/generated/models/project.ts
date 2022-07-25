/**
 * Code generated by [commercetools RMF-Codegen](https://github.com/commercetools/rmf-codegen). DO NOT EDIT.
 * Please don't change this file manually but run `rmf-codegen generate raml_file_path -o output_path -t typescript_client` to update it.
 * For more information about the commercetools platform APIs, visit https://docs.commercetools.com/.
 */

import { LastModifiedBy } from './common'
import { MessagesConfiguration, MessagesConfigurationDraft } from './message'
import { CustomFieldLocalizedEnumValue } from './type'

export interface CartsConfiguration {
  /**
   *	Default value for the `deleteDaysAfterLastModification` parameter of the [CartDraft](ctp:api:type:CartDraft). This field may not be present on Projects created before January 2020.
   *
   *
   */
  readonly deleteDaysAfterLastModification?: number
  /**
   *	Indicates if country _- no state_ Tax Rate fallback should be used when a shipping address state is not explicitly covered in the rates lists of all Tax Categories of a Cart Line Items. This field may not be present on Projects created before June 2020.
   *
   *
   */
  readonly countryTaxRateFallbackEnabled?: boolean
}
/**
 *	Represents a RFC 7662 compliant [OAuth 2.0 Token Introspection](https://datatracker.ietf.org/doc/html/rfc7662) endpoint. For more information, see [Requesting an access token using an external OAuth 2.0 server](/../api/authorization#requesting-an-access-token-using-an-external-oauth-server).
 *
 *	You can only configure **one** external OAuth 2.0 endpoint per Project. To authenticate using multiple external services (such as social network logins), use a middle layer authentication service.
 *
 */
export interface ExternalOAuth {
  /**
   *	URL with authorization header.
   *
   *
   */
  readonly url: string
  /**
   *	Partially hidden on retrieval.
   *
   */
  readonly authorizationHeader: string
}
/**
 *	Specifies the status of the [Order Search](/../api/projects/order-search) index.
 */
export type OrderSearchStatus = 'Activated' | 'Deactivated'
export interface Project {
  /**
   *	Current version of the Project.
   *
   *
   */
  readonly version: number
  /**
   *	User-defined unique identifier of the Project.
   *
   *
   */
  readonly key: string
  /**
   *	Name of the Project.
   *
   *
   */
  readonly name: string
  /**
   *	Country code of the geographic location.
   *
   *
   */
  readonly countries: string[]
  /**
   *	Currency code of the country. A Project must have at least one currency.
   *
   *
   */
  readonly currencies: string[]
  /**
   *	Language of the country. A Project must have at least one language.
   *
   *
   */
  readonly languages: string[]
  /**
   *	Date and time (UTC) the Project was initially created.
   *
   *
   */
  readonly createdAt: string
  /**
   *	Date in YYYY-MM format specifying when the trial period for the Project ends. Only present on Projects in trial period.
   *
   *
   */
  readonly trialUntil?: string
  /**
   *	Holds the configuration for the [Messages Query](/../api/projects/messages) feature.
   *
   *
   */
  readonly messages: MessagesConfiguration
  /**
   *	Holds the configuration for the [Carts](/../api/projects/carts) feature.
   *
   *
   */
  readonly carts: CartsConfiguration
  /**
   *	Holds the configuration for the [Shopping Lists](/../api/projects/shoppingLists) feature. This field may not be present on Projects created before January 2020.
   *
   *
   */
  readonly shoppingLists?: ShoppingListsConfiguration
  /**
   *	Holds the configuration for the [tiered shipping rates](ctp:api:type:ShippingRatePriceTier) feature.
   *
   *
   */
  readonly shippingRateInputType?: ShippingRateInputType
  /**
   *	Represents a RFC 7662 compliant [OAuth 2.0 Token Introspection](https://datatracker.ietf.org/doc/html/rfc7662) endpoint.
   *
   *
   */
  readonly externalOAuth?: ExternalOAuth
  /**
   *	Controls indexing of resources to be provided on high performance read-only search endpoints.
   *
   *
   */
  readonly searchIndexing?: SearchIndexingConfiguration
}
export interface ProjectUpdate {
  /**
   *	Expected version of the Project on which the changes should be applied. If the expected version does not match the actual version, a [409 Conflict](/../api/errors#409-conflict) will be returned.
   *
   *
   */
  readonly version: number
  /**
   *	Update actions to be performed on the Project.
   *
   *
   */
  readonly actions: ProjectUpdateAction[]
}
export type ProjectUpdateAction =
  | ProjectChangeCartsConfigurationAction
  | ProjectChangeCountriesAction
  | ProjectChangeCountryTaxRateFallbackEnabledAction
  | ProjectChangeCurrenciesAction
  | ProjectChangeLanguagesAction
  | ProjectChangeMessagesConfigurationAction
  | ProjectChangeNameAction
  | ProjectChangeOrderSearchStatusAction
  | ProjectChangeProductSearchIndexingEnabledAction
  | ProjectChangeShoppingListsConfigurationAction
  | ProjectSetExternalOAuthAction
  | ProjectSetShippingRateInputTypeAction
/**
 *	Controls indexing of resources to be provided on high performance read-only search endpoints.
 *
 */
export interface SearchIndexingConfiguration {
  /**
   *	Configuration for the [Product Projection Search](/../api/projects/products-search) and [Product Suggestions](/../api/projects/products-suggestions) endpoints.
   *
   */
  readonly products?: SearchIndexingConfigurationValues
  /**
   *	Configuration for the [Order Search](/../api/projects/order-search) feature.
   *
   */
  readonly orders?: SearchIndexingConfigurationValues
}
/**
 *	Status of resource indexing.
 */
export type SearchIndexingConfigurationStatus =
  | 'Activated'
  | 'Deactivated'
  | 'Indexing'
export interface SearchIndexingConfigurationValues {
  /**
   *	Current status of resource indexing. Present on Projects from 1 February 2019.
   *
   */
  readonly status?: SearchIndexingConfigurationStatus
  /**
   *	Date and time (UTC) the Project was last updated. Only present on Projects last modified after 1 February 2019.
   *
   *
   */
  readonly lastModifiedAt?: string
  /**
   *	Present on resources created after 1 February 2019 except for [events not tracked](/../api/client-logging#events-tracked).
   *
   *
   */
  readonly lastModifiedBy?: LastModifiedBy
}
export type ShippingRateInputType =
  | CartClassificationType
  | CartScoreType
  | CartValueType
/**
 *	Used when the ShippingRate maps to an abstract Cart categorization expressed by strings (for example, `Light`, `Medium`, or `Heavy`).
 *	Only keys defined in the `values` array can be used to create a tier or to set a value of the `shippingRateInput` on the [Cart](ctp:api:type:Cart).
 *	Keys must be unique.
 *
 */
export interface CartClassificationType {
  readonly type: 'CartClassification'
  /**
   *	The classification items that can be used for specifiying any [ShippingRatePriceTier](ctp:api:type:ShippingRatePriceTier).
   *
   */
  readonly values: CustomFieldLocalizedEnumValue[]
}
/**
 *	Used when the ShippingRate maps to an abstract Cart categorization expressed by integers (such as shipping scores or weight ranges).
 *
 */
export interface CartScoreType {
  readonly type: 'CartScore'
}
/**
 *	Used when the ShippingRate maps to the sum of [LineItem](ctp:api:type:LineItem) Prices.
 *	The value of the Cart is used to select a tier.
 *	If chosen, it is not possible to set a value for the `shippingRateInput` on the [Cart](ctp:api:type:Cart).
 *
 */
export interface CartValueType {
  readonly type: 'CartValue'
}
export interface ShoppingListsConfiguration {
  /**
   *	Default value for the `deleteDaysAfterLastModification` parameter of the [ShoppingListDraft](ctp:api:type:ShoppingListDraft).
   *	This field may not be present on Projects created before January 2020.
   *
   *
   */
  readonly deleteDaysAfterLastModification?: number
}
export interface ProjectChangeCartsConfigurationAction {
  readonly action: 'changeCartsConfiguration'
  /**
   *	Configuration for the [Carts](/../api/projects/carts) feature.
   *
   *
   */
  readonly cartsConfiguration: CartsConfiguration
}
export interface ProjectChangeCountriesAction {
  readonly action: 'changeCountries'
  /**
   *	New value to set. Must not be empty.
   *
   *
   */
  readonly countries: string[]
}
export interface ProjectChangeCountryTaxRateFallbackEnabledAction {
  readonly action: 'changeCountryTaxRateFallbackEnabled'
  /**
   *	When `true`, country _- no state_ Tax Rate is used as fallback. See [CartsConfiguration](ctp:api:type:CartsConfiguration).
   *
   */
  readonly countryTaxRateFallbackEnabled: boolean
}
export interface ProjectChangeCurrenciesAction {
  readonly action: 'changeCurrencies'
  /**
   *	New value to set. Must not be empty.
   *
   *
   */
  readonly currencies: string[]
}
/**
 *	If a language is used by a [Store](ctp:api:type:Store), it cannot be deleted. Attempts to delete such language will lead to [LanguageUsedInStores](/../api/errors#projects-400-language-used-in-stores) errors.
 *
 */
export interface ProjectChangeLanguagesAction {
  readonly action: 'changeLanguages'
  /**
   *	New value to set. Must not be empty.
   *
   *
   */
  readonly languages: string[]
}
export interface ProjectChangeMessagesConfigurationAction {
  readonly action: 'changeMessagesConfiguration'
  /**
   *	Configuration for the [Messages Query](/../api/projects/messages) feature.
   *
   */
  readonly messagesConfiguration: MessagesConfigurationDraft
}
export interface ProjectChangeNameAction {
  readonly action: 'changeName'
  /**
   *	New value to set. Must not be empty.
   *
   *
   */
  readonly name: string
}
export interface ProjectChangeOrderSearchStatusAction {
  readonly action: 'changeOrderSearchStatus'
  /**
   *	Activates or deactivates the [Order Search](/../api/projects/order-search) feature. Activation will trigger building a search index for the Orders in the Project.
   *
   */
  readonly status: OrderSearchStatus
}
export interface ProjectChangeProductSearchIndexingEnabledAction {
  readonly action: 'changeProductSearchIndexingEnabled'
  /**
   *	If `false`, the indexing of [Product](ctp:api:type:Product) information will stop and the [Product Projection Search](/../api/projects/products-search) as well as the [Product Suggestions](/../api/projects/products-suggestions) endpoint will not be available anymore for this Project. The Project's [SearchIndexingConfiguration](ctp:api:type:SearchIndexingConfiguration) `status` for `products` will be changed to `"Deactivated"`.
   *
   *	If `true`, the indexing of [Product](ctp:api:type:Product) information will start and the [Product Projection Search](/../api/projects/products-search) as well as the [Product Suggestions](/../api/projects/products-suggestions) endpoint will become available soon after for this Project. Proportional to the amount of information being indexed, the Project's [SearchIndexingConfiguration](ctp:api:type:SearchIndexingConfiguration) `status` for `products` will be shown as `"Indexing"` during this time. As soon as the indexing has finished, the configuration status will be changed to `"Activated"` making the aforementioned endpoints fully available for this Project.
   *
   *
   */
  readonly enabled: boolean
}
export interface ProjectChangeShoppingListsConfigurationAction {
  readonly action: 'changeShoppingListsConfiguration'
  /**
   *	Configuration for the [Shopping Lists](/../api/projects/shoppingLists) feature.
   *
   *
   */
  readonly shoppingListsConfiguration: ShoppingListsConfiguration
}
export interface ProjectSetExternalOAuthAction {
  readonly action: 'setExternalOAuth'
  /**
   *	Value to set. If empty, any existing value will be removed.
   *
   *
   */
  readonly externalOAuth?: ExternalOAuth
}
export interface ProjectSetShippingRateInputTypeAction {
  readonly action: 'setShippingRateInputType'
  /**
   *	Value to set. If empty, any existing value will be removed.
   *
   *
   */
  readonly shippingRateInputType?: ShippingRateInputType
}
