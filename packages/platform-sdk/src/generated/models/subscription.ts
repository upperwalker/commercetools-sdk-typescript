/**
 * Code generated by [commercetools RMF-Codegen](https://github.com/commercetools/rmf-codegen). DO NOT EDIT.
 * Please don't change this file manually but run `rmf-codegen generate raml_file_path -o output_path -t typescript_client` to update it.
 * For more information about the commercetools platform APIs, visit https://docs.commercetools.com/.
 */

import { BaseResource, CreatedBy, LastModifiedBy, Reference } from './common'
import { UserProvidedIdentifiers } from './message'

/**
 *	Defines the method of authentication for AWS SQS and SNS Destinations.
 */
export type AwsAuthenticationMode = 'Credentials' | 'IAM' | string
/**
 *	Notification about changes to a resource. The payload format differs for resource [creation](ctp:api:type:ResourceCreatedDeliveryPayload),
 *	[update](ctp:api:type:ResourceUpdatedDeliveryPayload),
 *	and [deletion](ctp:api:type:ResourceDeletedDeliveryPayload).
 *
 */
export interface ChangeSubscription {
  /**
   *	Unique identifier for the type of resource, for example, `cart`.
   *
   *
   */
  readonly resourceTypeId: ChangeSubscriptionResourceTypeId
}
/**
 *	Resource types supported by [ChangeSubscriptions](ctp:api:type:ChangeSubscription):
 *
 */
export type ChangeSubscriptionResourceTypeId =
  | 'business-unit'
  | 'cart'
  | 'cart-discount'
  | 'category'
  | 'channel'
  | 'customer'
  | 'customer-email-token'
  | 'customer-group'
  | 'customer-password-token'
  | 'discount-code'
  | 'extension'
  | 'inventory-entry'
  | 'key-value-document'
  | 'order'
  | 'order-edit'
  | 'payment'
  | 'product'
  | 'product-discount'
  | 'product-price'
  | 'product-selection'
  | 'product-type'
  | 'quote'
  | 'quote-request'
  | 'review'
  | 'shipping-method'
  | 'shopping-list'
  | 'staged-quote'
  | 'standalone-price'
  | 'state'
  | 'store'
  | 'subscription'
  | 'tax-category'
  | 'type'
  | 'zone'
  | string
/**
 *	The [CloudEventsFormat](ctp:api:type:CloudEventsFormat) represents event data in a way that conforms to a common specification. The message payload can be found inside the `data` field.
 *
 */
export interface CloudEventsPayload {
  /**
   *	The version of the [CloudEvents](https://github.com/cloudevents/spec/blob/v1.0.2/cloudevents/spec.md) specification which the event uses.
   *
   *
   */
  readonly specversion: string
  /**
   *	Unique identifier of the event.
   *
   *
   */
  readonly id: string
  /**
   *	The `type` is namespaced with `com.commercetools`, followed by the [ReferenceTypeId](ctp:api:type:ReferenceTypeId), the type of Subscription (either `message` or `change`), and the message or change type.
   *	For example, `com.commercetools.product.message.ProductPublished` or `com.commercetools.order.change.ResourceCreated`.
   *
   *
   */
  readonly type: string
  /**
   *	The default REST URI of the [ReferenceTypeId](ctp:api:type:ReferenceTypeId) that triggered this event, including the project key.
   *
   *
   */
  readonly source: string
  /**
   *	Unique identifier of the resource that triggered the event.
   *
   *
   */
  readonly subject: string
  /**
   *	Corresponds to the `lastModifiedAt` of the resource at the time the event was triggered.
   *
   *
   */
  readonly time: string
  /**
   *	Corresponds to the `sequenceNumber` of a [MessageSubscription](ctp:api:type:MessageSubscription). Can be used to process messages in the correct order.
   *
   *
   */
  readonly sequence?: string
  /**
   *	`"Integer"`
   *
   *
   */
  readonly sequencetype?: string
  /**
   *	The URI from which the message can be retrieved if messages are [enabled](/../api/projects/messages#enable-querying-messages-via-the-api). Only set for [MessageSubscriptions](ctp:api:type:MessageSubscription).
   *
   *
   */
  readonly dataref?: string
  /**
   *	[MessageDeliveryPayload](ctp:api:type:MessageDeliveryPayload), [ResourceCreatedDeliveryPayload](ctp:api:type:ResourceCreatedDeliveryPayload), [ResourceUpdatedDeliveryPayload](ctp:api:type:ResourceUpdatedDeliveryPayload), or [ResourceDeletedDeliveryPayload](ctp:api:type:ResourceDeletedDeliveryPayload).
   *
   *
   */
  readonly data: DeliveryPayload
}
export type DeliveryFormat = CloudEventsFormat | PlatformFormat
/**
 *	The CloudEventsFormat can be used with any [Destination](#destination), and the payload is delivered in the `JSON Event Format`. [AzureEventGridDestination](ctp:api:type:AzureEventGridDestination) offers native support to filter and route CloudEvents.
 *
 */
export interface CloudEventsFormat {
  readonly type: 'CloudEvents'
  /**
   *	Supported versions: "1.0".
   *
   *
   */
  readonly cloudEventsVersion: string
}
/**
 *	All payloads for the [PlatformFormat](ctp:api:type:PlatformFormat) share these common fields.
 *
 */
export type DeliveryPayload =
  | MessageDeliveryPayload
  | ResourceCreatedDeliveryPayload
  | ResourceDeletedDeliveryPayload
  | ResourceUpdatedDeliveryPayload
export type Destination =
  | AzureEventGridDestination
  | AzureServiceBusDestination
  | EventBridgeDestination
  | GoogleCloudPubSubDestination
  | SnsDestination
  | SqsDestination
/**
 *	[Azure Event Grid](https://azure.microsoft.com/en-us/services/event-grid/) can be used to push messages to Azure Functions, HTTP endpoints (webhooks), and several other Azure tools. Event Grid can only be used with the [CloudEventsFormat](ctp:api:type:CloudEventsFormat).
 *	To set up a Subscription with Azure Event Grid, first create a topic in the [Azure Portal](https://azure.microsoft.com/en-us/get-started/azure-portal/). To allow Composable Commerce to push messages to your topic, provide an [access key](https://docs.microsoft.com/en-us/azure/event-grid/get-access-keys).
 *
 */
export interface AzureEventGridDestination {
  readonly type: 'EventGrid'
  /**
   *	URI of the topic.
   *
   *
   */
  readonly uri: string
  /**
   *	Partially hidden on retrieval for security reasons.
   *
   *
   */
  readonly accessKey: string
}
/**
 *	[Azure Service Bus](https://azure.microsoft.com/en-us/services/service-bus/) can be used as a pull-queue with [Queues](https://docs.microsoft.com/en-us/azure/service-bus-messaging/service-bus-queues-topics-subscriptions#queues), or to fan-out messages with [Topics and Subscriptions](https://docs.microsoft.com/en-us/azure/service-bus-messaging/service-bus-queues-topics-subscriptions#topics-and-subscriptions).
 *	To set up a Subscription with Azure Service Bus, first create a queue/topic in the [Azure Portal](https://azure.microsoft.com/en-us/get-started/azure-portal/) with a Shared Access Policy including the `Send` permission.
 *
 */
export interface AzureServiceBusDestination {
  readonly type: 'AzureServiceBus'
  /**
   *	SharedAccessKey is partially hidden on retrieval for security reasons.
   *
   *
   */
  readonly connectionString: string
}
/**
 *	[AWS EventBridge](https://aws.amazon.com/eventbridge/) can be used to push events and messages to a serverless event bus that can forward them to AWS SQS, SNS, Lambda, and other AWS services based on forwarding rules.
 *	Once the Subscription is created, an equivalent "partner event source" is created in AWS EventBridge. This event source must be associated with an event bus for the Subscription setup to be complete.
 *
 */
export interface EventBridgeDestination {
  readonly type: 'EventBridge'
  /**
   *	AWS region that receives the events.
   *
   *
   */
  readonly region: string
  /**
   *	ID of the AWS account that receives the events.
   *
   *
   */
  readonly accountId: string
}
/**
 *	Destination for [Google Cloud Pub/Sub](https://cloud.google.com/pubsub/) that can be used
 *	for [Pull subscriptions](https://cloud.google.com/pubsub/docs/pull) as well as for [Push subscriptions](https://cloud.google.com/pubsub/docs/push).
 *	The `topic` must give the `pubsub.topics.publish` permission to the service account `subscriptions@commercetools-platform.iam.gserviceaccount.com`.
 *	If used with the [CloudEventsFormat](#cloudeventsformat), the message conforms to the [PubSub Protocol Binding](https://github.com/google/knative-gcp/blob/master/docs/spec/pubsub-protocol-binding.md) of the [Structured Content Mode](https://github.com/google/knative-gcp/blob/master/docs/spec/pubsub-protocol-binding.md#32-structured-content-mode).
 *
 */
export interface GoogleCloudPubSubDestination {
  readonly type: 'GoogleCloudPubSub'
  /**
   *	ID of the Google Cloud project that contains the Pub/Sub topic.
   *
   *
   */
  readonly projectId: string
  /**
   *	Name of the topic.
   *
   *
   */
  readonly topic: string
}
/**
 *	This payload is sent for a [MessageSubscription](ctp:api:type:MessageSubscription).
 *
 */
export interface MessageDeliveryPayload {
  readonly notificationType: 'Message'
  /**
   *	`key` of the [Project](ctp:api:type:Project).
   *	Useful in message processing if the Destination receives events from multiple Projects.
   *
   *
   */
  readonly projectKey: string
  /**
   *	Reference to the resource that triggered the message.
   *
   *
   */
  readonly resource: Reference
  /**
   *	User-defined unique identifiers of the resource.
   *
   *
   */
  readonly resourceUserProvidedIdentifiers?: UserProvidedIdentifiers
  /**
   *	Unique ID of the message.
   *
   *
   */
  readonly id: string
  /**
   *	Last seen version of the resource.
   *
   *
   */
  readonly version: number
  /**
   *	Date and time (UTC) the resource was initially created.
   *
   *
   */
  readonly createdAt: string
  /**
   *	Date and time (UTC) the resource was last modified.
   *
   *
   */
  readonly lastModifiedAt: string
  /**
   *	Used to ensure all messages of the resource are processed in correct order.
   *	The `sequenceNumber` of the next message of the resource is a successor of the `sequenceNumber` of the current message.
   *
   *
   */
  readonly sequenceNumber: number
  /**
   *	Version of the resource on which the change was performed.
   *
   *
   */
  readonly resourceVersion: number
  /**
   *	If the payload does not fit into the size limit or its format is not accepted by the messaging service, the `payloadNotIncluded` field is present.
   *
   *
   */
  readonly payloadNotIncluded?: PayloadNotIncluded
}
/**
 *	For supported resources and message types, see [Message Types](/../api/projects/messages#message-types). Messages will be delivered even if the Messages Query HTTP API [is not enabled](/../api/projects/messages#enable-querying-messages-via-the-api).
 *
 *	For MessageSubscriptions, the format of the payload is [MessageDeliveryPayload](ctp:api:type:MessageDeliveryPayload).
 *
 */
export interface MessageSubscription {
  /**
   *	Unique identifier for the type of resource, for example, `order`.
   *
   *
   */
  readonly resourceTypeId: MessageSubscriptionResourceTypeId
  /**
   *	Must contain valid message types for the resource. For example, for resource type `product` the message type `ProductPublished` is valid.
   *	If no `types` of messages are given, the Subscription will receive all messages for this resource.
   *
   *
   */
  readonly types?: string[]
}
/**
 *	Resource types supported by [MessageSubscriptions](ctp:api:type:MessageSubscription):
 *
 */
export type MessageSubscriptionResourceTypeId =
  | 'business-unit'
  | 'category'
  | 'customer'
  | 'inventory-entry'
  | 'order'
  | 'payment'
  | 'product'
  | 'product-selection'
  | 'quote'
  | 'quote-request'
  | 'review'
  | 'staged-quote'
  | 'standalone-price'
  | 'store'
  | string
export interface PayloadNotIncluded {
  /**
   *	Reason the payload is not included. For example, the payload is too large, or its content is not supported by the Subscription destination.
   *
   *
   */
  readonly reason: string
  /**
   *	Value of the `type` field in the original payload.
   *
   *
   */
  readonly payloadType: string
}
/**
 *	The PlatformFormat uses constructs that are similar to the ones used in the REST API, for example, on the [Messages Query HTTP API](/../api/projects/messages).
 *
 */
export interface PlatformFormat {
  readonly type: 'Platform'
}
/**
 *	This payload is sent for a [ChangeSubscription](ctp:api:type:ChangeSubscription) when a resource is created.
 *
 */
export interface ResourceCreatedDeliveryPayload {
  readonly notificationType: 'ResourceCreated'
  /**
   *	`key` of the [Project](ctp:api:type:Project).
   *	Useful in message processing if the Destination receives events from multiple Projects.
   *
   *
   */
  readonly projectKey: string
  /**
   *	Reference to the resource that triggered the message.
   *
   *
   */
  readonly resource: Reference
  /**
   *	User-defined unique identifiers of the resource.
   *
   *
   */
  readonly resourceUserProvidedIdentifiers?: UserProvidedIdentifiers
  /**
   *	Last seen version of the resource.
   *
   *
   */
  readonly version: number
  /**
   *	Date and time (UTC) the resource was last modified.
   *
   *
   */
  readonly modifiedAt: string
}
/**
 *	This payload is sent for a [ChangeSubscription](ctp:api:type:ChangeSubscription) when a resource is deleted.
 *
 */
export interface ResourceDeletedDeliveryPayload {
  readonly notificationType: 'ResourceDeleted'
  /**
   *	`key` of the [Project](ctp:api:type:Project).
   *	Useful in message processing if the Destination receives events from multiple Projects.
   *
   *
   */
  readonly projectKey: string
  /**
   *	Reference to the resource that triggered the message.
   *
   *
   */
  readonly resource: Reference
  /**
   *	User-defined unique identifiers of the resource.
   *
   *
   */
  readonly resourceUserProvidedIdentifiers?: UserProvidedIdentifiers
  /**
   *	Last seen version of the resource.
   *
   *
   */
  readonly version: number
  /**
   *	Date and time (UTC) the resource was last deleted.
   *
   *
   */
  readonly modifiedAt: string
  /**
   *	`true` if the `dataErasure` [parameter](/../api/general-concepts#data-erasure-of-personal-data) on the `DELETE` request was set to `true`.
   *
   *
   */
  readonly dataErasure?: boolean
}
/**
 *	This payload is sent for a [ChangeSubscription](ctp:api:type:ChangeSubscription) when a resource is updated. This includes updates by a background process, like a change in product availability.
 *
 */
export interface ResourceUpdatedDeliveryPayload {
  readonly notificationType: 'ResourceUpdated'
  /**
   *	`key` of the [Project](ctp:api:type:Project).
   *	Useful in message processing if the Destination receives events from multiple Projects.
   *
   *
   */
  readonly projectKey: string
  /**
   *	Reference to the resource that triggered the message.
   *
   *
   */
  readonly resource: Reference
  /**
   *	User-defined unique identifiers of the resource.
   *
   *
   */
  readonly resourceUserProvidedIdentifiers?: UserProvidedIdentifiers
  /**
   *	Last seen version of the resource.
   *
   *
   */
  readonly version: number
  /**
   *	Version of the resource before the update.
   *
   *
   */
  readonly oldVersion: number
  /**
   *	Date and time (UTC) the resource was last updated.
   *
   *
   */
  readonly modifiedAt: string
}
/**
 *	[AWS SNS](https://aws.amazon.com/sns/) can be used to push messages to AWS Lambda, HTTP endpoints (webhooks), or fan-out messages to SQS queues. The SQS queue must be a [Standard](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/standard-queues.html) queue type.
 *
 *	We recommend setting `authenticationMode` to `IAM`, to avoid unnecessary key management. For IAM authentication, give permissions to user `arn:aws:iam::362576667341:user/subscriptions` to publish to the topic before creating the Subscription. Otherwise, a test message will not be sent.
 *
 *	If you prefer to use `Credentials` for authentication, we recommend [creating an IAM user](https://docs.aws.amazon.com/sns/latest/dg/sns-setting-up.html#create-iam-user) with an `accessKey` and `accessSecret` pair specifically for each Subscription.
 *
 *	The IAM user should only have the `sns:Publish` permission on this topic.
 *
 */
export interface SnsDestination {
  readonly type: 'SNS'
  /**
   *	Only present if `authenticationMode` is set to `Credentials`.
   *
   */
  readonly accessKey?: string
  /**
   *	Only present if `authenticationMode` is set to `Credentials`.
   *
   */
  readonly accessSecret?: string
  /**
   *	Amazon Resource Name (ARN) of the topic.
   *
   */
  readonly topicArn: string
  /**
   *	Defines the method of authentication for the SNS topic.
   *
   */
  readonly authenticationMode?: AwsAuthenticationMode
}
/**
 *	[AWS SQS](https://aws.amazon.com/sqs/) is a pull-queue on AWS.
 *	The queue must be a [Standard](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/standard-queues.html) queue type with a `MaximumMessageSize` of `256 KB`.
 *	We recommend setting `authenticationMode` to `IAM`, to avoid unnecessary key management. For IAM authentication, give permissions to user `arn:aws:iam::362576667341:user/subscriptions` to send messages to the queue before creating the Subscription. Otherwise, a test message will not be sent.
 *
 *	If you prefer to use `Credentials` for authentication, we recommend [creating an IAM user](https://docs.aws.amazon.com/sns/latest/dg/sns-setting-up.html#create-iam-user) with an `accessKey` and `accessSecret` pair specifically for each Subscription.
 *
 *	The IAM user should only have the `sqs:SendMessage` permission on this queue.
 *
 */
export interface SqsDestination {
  readonly type: 'SQS'
  /**
   *	Only present if `authenticationMode` is set to `Credentials`.
   *
   */
  readonly accessKey?: string
  /**
   *	Only present if `authenticationMode` is set to `Credentials`.
   *
   */
  readonly accessSecret?: string
  /**
   *	URL of the Amazon SQS queue.
   *
   *
   */
  readonly queueUrl: string
  /**
   *	[AWS Region](https://docs.aws.amazon.com/general/latest/gr/rande-manage.html) the message queue is located in.
   *
   *
   */
  readonly region: string
  /**
   *	Defines the method of authentication for the SQS queue.
   *
   */
  readonly authenticationMode?: AwsAuthenticationMode
}
export interface Subscription extends BaseResource {
  /**
   *	Unique identifier of the Subscription.
   *
   *
   */
  readonly id: string
  /**
   *	Current version of the Subscription.
   *
   *
   */
  readonly version: number
  /**
   *	Date and time (UTC) the Subscription was initially created.
   *
   *
   */
  readonly createdAt: string
  /**
   *	Date and time (UTC) the Subscription was last modified.
   *
   *
   */
  readonly lastModifiedAt: string
  /**
   *	Present on resources created after 1 February 2019 except for [events not tracked](/../api/client-logging#events-tracked).
   *
   *
   */
  readonly lastModifiedBy?: LastModifiedBy
  /**
   *	Present on resources created after 1 February 2019 except for [events not tracked](/../api/client-logging#events-tracked).
   *
   *
   */
  readonly createdBy?: CreatedBy
  /**
   *	Change notifications subscribed to.
   *
   *
   */
  readonly changes: ChangeSubscription[]
  /**
   *	Messaging service to which the messages are to be sent.
   *
   *
   */
  readonly destination: Destination
  /**
   *	User-defined unique identifier of the Subscription.
   *
   *
   */
  readonly key?: string
  /**
   *	Messages subscribed to.
   *
   *
   */
  readonly messages: MessageSubscription[]
  /**
   *	Format in which the payload is delivered.
   *
   *
   */
  readonly format: DeliveryFormat
  /**
   *	Status of the Subscription.
   *
   *
   */
  readonly status: SubscriptionHealthStatus
}
/**
 *	Either `messages` or `changes` must be set.
 *
 */
export interface SubscriptionDraft {
  /**
   *	Change notifications to be subscribed to.
   *
   *
   */
  readonly changes?: ChangeSubscription[]
  /**
   *	Messaging service to which the messages are sent.
   *
   *
   */
  readonly destination: Destination
  /**
   *	User-defined unique identifier for the Subscription.
   *
   *
   */
  readonly key?: string
  /**
   *	Messages to be subscribed to.
   *
   *
   */
  readonly messages?: MessageSubscription[]
  /**
   *	Format in which the payload is delivered. When not provided, the [PlatformFormat](ctp:api:type:PlatformFormat) is selected by default.
   *
   *
   */
  readonly format?: DeliveryFormat
}
/**
 *	The health status of the Subscription that indicates whether messages are being delivered to the Destination.
 *
 */
export type SubscriptionHealthStatus =
  | 'ConfigurationError'
  | 'ConfigurationErrorDeliveryStopped'
  | 'Healthy'
  | 'TemporaryError'
  | string
/**
 *	[PagedQueryResult](/../api/general-concepts#pagedqueryresult) with `results` containing an array of [Subscription](ctp:api:type:Subscription).
 *
 */
export interface SubscriptionPagedQueryResponse {
  /**
   *	Number of [results requested](/../api/general-concepts#limit).
   *
   *
   */
  readonly limit: number
  /**
   *	Number of [elements skipped](/../api/general-concepts#offset).
   *
   *
   */
  readonly offset: number
  /**
   *	Actual number of results returned.
   *
   *
   */
  readonly count: number
  /**
   *	Total number of results matching the query.
   *	This number is an estimation that is not [strongly consistent](/../api/general-concepts#strong-consistency).
   *	This field is returned by default.
   *	For improved performance, calculating this field can be deactivated by using the query parameter `withTotal=false`.
   *	When the results are filtered with a [Query Predicate](/../api/predicates/query), `total` is subject to a [limit](/../api/limits#queries).
   *
   *
   */
  readonly total?: number
  /**
   *	Subscriptions matching the query.
   *
   *
   */
  readonly results: Subscription[]
}
export interface SubscriptionUpdate {
  /**
   *	Expected version of the Subscription on which the changes should be applied. If the expected version does not match the actual version, a [409 Conflict](/../api/errors#409-conflict) will be returned.
   *
   *
   */
  readonly version: number
  /**
   *	Update actions to be performed on the Subscription.
   *
   *
   */
  readonly actions: SubscriptionUpdateAction[]
}
export type SubscriptionUpdateAction =
  | SubscriptionChangeDestinationAction
  | SubscriptionSetChangesAction
  | SubscriptionSetKeyAction
  | SubscriptionSetMessagesAction
/**
 *	A test message is sent to ensure the correct configuration of the Destination. If the message cannot be delivered, the update will fail. The payload of the test message is a notification of type [ResourceCreated](ctp:api:type:ResourceCreatedDeliveryPayload) for the `resourceTypeId` `subscription`. The `status` will change to [Healthy](ctp:api:type:SubscriptionHealthStatus), if it isn't already.
 *
 */
export interface SubscriptionChangeDestinationAction {
  readonly action: 'changeDestination'
  /**
   *	New value to set. Must not be empty.
   *
   *
   */
  readonly destination: Destination
}
export interface SubscriptionSetChangesAction {
  readonly action: 'setChanges'
  /**
   *	Value to set. Can only be unset if `messages` is set.
   *
   *
   */
  readonly changes?: ChangeSubscription[]
}
export interface SubscriptionSetKeyAction {
  readonly action: 'setKey'
  /**
   *	Value to set. If empty, any existing value will be removed.
   *
   *
   */
  readonly key?: string
}
export interface SubscriptionSetMessagesAction {
  readonly action: 'setMessages'
  /**
   *	Value to set. Can only be unset if `changes` is set.
   *
   *
   */
  readonly messages?: MessageSubscription[]
}
