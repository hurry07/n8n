import {
	INodeProperties,
 } from 'n8n-workflow';

export const urlOperations = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'url',
				],
			},
		},
		options: [
			{
				name: 'Expand',
				value: 'expand',
				description: 'Expand a url',
			},
			{
				name: 'Shorten',
				value: 'shorten',
				description: 'Shorten a url',
			},
			{
				name: 'Stats',
				value: 'stats',
				description: 'Get stats about one short URL',
			},
		],
		default: 'shorten',
		description: 'The operation to perform.',
	},
] as INodeProperties[];

export const urlFields = [

/* -------------------------------------------------------------------------- */
/*                                url:shorten                                 */
/* -------------------------------------------------------------------------- */
	{
		displayName: 'URL',
		name: 'url',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'url',
				],
				operation: [
					'shorten',
				],
			},
		},
		default: '',
		description: 'The url to shorten',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'url',
				],
				operation: [
					'shorten',
				],
			},
		},
		options: [
			{
				displayName: 'Keyword',
				name: 'keyword',
				type: 'string',
				default: '',
				description: '',
			},
			{
				displayName: 'Title',
				name: 'title',
				type: 'string',
				default: '',
				description: '',
			},
		],
	},
/* -------------------------------------------------------------------------- */
/*                                url:expand                                  */
/* -------------------------------------------------------------------------- */
	{
		displayName: 'Short URL',
		name: 'shortUrl',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'url',
				],
				operation: [
					'expand',
				],
			},
		},
		default: '',
		description: 'The shorturl to expand',
	},
/* -------------------------------------------------------------------------- */
/*                                url:stats                                   */
/* -------------------------------------------------------------------------- */
	{
		displayName: 'Short URL',
		name: 'shortUrl',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'url',
				],
				operation: [
					'stats',
				],
			},
		},
		default: '',
		description: 'The shorturl for which to get stats',
	},
] as INodeProperties[];
