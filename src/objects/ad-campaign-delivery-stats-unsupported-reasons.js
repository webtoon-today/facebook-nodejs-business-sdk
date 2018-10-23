/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */
import {AbstractCrudObject} from './../abstract-crud-object';

/**
 * AdCampaignDeliveryStatsUnsupportedReasons
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdCampaignDeliveryStatsUnsupportedReasons extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      reason_data: 'reason_data',
      reason_type: 'reason_type',
      id: 'id'
    });
  }

  get (fields, params): AdCampaignDeliveryStatsUnsupportedReasons {
    return this.read(
      fields,
      params
    );
  }
}