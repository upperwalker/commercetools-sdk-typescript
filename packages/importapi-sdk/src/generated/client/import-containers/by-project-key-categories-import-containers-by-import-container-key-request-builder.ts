/**
 * Code generated by [commercetools RMF-Codegen](https://github.com/commercetools/rmf-codegen). DO NOT EDIT.
 * Please don't change this file manually but run `rmf-codegen generate raml_file_path -o output_path -t typescript_client` to update it.
 * For more information about the commercetools platform APIs, visit https://docs.commercetools.com/.
 */
import {
  CategoryImportRequest,
  ImportResponse,
} from '../../models/importrequests'
import { executeRequest } from '../../shared/utils/common-types'
import { ApiRequest } from '../../shared/utils/requests-utils'

export class ByProjectKeyCategoriesImportContainersByImportContainerKeyRequestBuilder {
  constructor(
    protected readonly args: {
      pathArgs: {
        projectKey: string
        importContainerKey: string
      }
      executeRequest: executeRequest
      baseUri?: string
    }
  ) {}
  /**
   *	Creates a request for creating new Categories or updating existing ones.
   */
  public post(methodArgs: {
    body: CategoryImportRequest
    headers?: {
      [key: string]: string | string[]
    }
  }): ApiRequest<ImportResponse> {
    return new ApiRequest<ImportResponse>(
      {
        baseUri: this.args.baseUri,
        method: 'POST',
        uriTemplate:
          '/{projectKey}/categories/import-containers/{importContainerKey}',
        pathVariables: this.args.pathArgs,
        headers: {
          'Content-Type': 'application/json',
          ...methodArgs?.headers,
        },
        body: methodArgs?.body,
      },
      this.args.executeRequest
    )
  }
}