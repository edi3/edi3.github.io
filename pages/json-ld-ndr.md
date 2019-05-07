---
layout: page
title: edi3 JSON-LD NDR Specifications
permalink: /json-ld-ndr/
---

# edi3 JSON-LD NDR Specifications

The edi3 JSON-LD NDR Specifications are based on ...

* [JSON-LD NDR GitHub repository](https://github.com/edi3/edi3-json-ld-ndr){:target="_blank"}
* [JSON-LD NDR Slack Channel](https://edi3.slack.com/messages/spec-json-ld-ndr/){:target="_blank"} ([you must signup to edi3 slack first](https://join.slack.com/t/edi3/shared_invite/enQtNTY5OTkzMjQ0NjcyLTM1MzYyNjg5M2RlMWIyZjUzMDBlNWQ3OWIyZTNhMDhhN2UzYjIyMjk4M2VhM2ViNzhhM2Y1OWE0Y2FhYTc1ZTg){:target="_blank"})

| Specification URL | Version | Status | API Definition | Issues List |
| ----------------- | ------  | ------ | -------------- | ----------- |
| [JSON-LD NDR spec](//edi3.org/specs/edi3-json-ld-ndr/master/) | Working Draft | ![Raw](//rfc.unprotocols.org/spec:2/COSS/raw.svg) | [ReDoc](//edi3.org/specs/edi3-json-ld-ndr/master/redoc-static.html){:target="_blank"} |  [JSON-LD NDR Issues](https://github.com/edi3/edi3-json-ld-ndr/issues){:target="_blank"}  |


## Example
This sections illustrates an example of how data is linked via 

### API Payload
The below is a data object which could be passed in the request or reply of an API call. 

```
{
	"@context": "http://edi3.org/cefact-bsp.jsonld",
	"consignment": {
		"identification": "https://www.maersk.com/tracking/#tracking/123456789",
		"includedConsignmentItem": [
			"consignmentItem": {
				"information": "Mangos and bananas",
				"grossWeight": {
					"Value": "12000",
					"Unit": "Kgs"
				}
			}
		],
		"utilizedTransportEquipment": [
			"transportEquipment": {
				"identification": "https://app.bic-boxtech.org/container/MSKU0134962",
				"affixedSeal": {
					"identification": "54234398"
				}
			}
		]
	}
}
```

This JSON object specifies a Consignment and its ConsignmentItem and TransportEquipment. The Consignment is identified by a bookingnumber via linkage to Maersk, who in the role of carrier has issued the booking number. The TransportEquipment number is governed by BIC, available through their boxtech API. 

It also defines a context hosted under edi3.org. The `@context` is json-ld's way of linking payload elements to defined semantics. 

### Semantic Context
The json-ld context file defines the semantics of the elements of the payload json file. Below is an example of how the `cefact-bsp.jsonld` might look. 

```
{
	"@context": {
		"consignment": { 
			"@id": "http://edi3.org/contexts/Consignment",  
			"@type": "@id" 
		},
		"consignmentItem": "edi3.org/contexts/ConsignmentItem",
		"transportEquipment": {
			"@id": "http://edi3.org/contexts/TransportEquipment", 
			"@type": "@id" 
		}
	}
}
```
What this means is that the semantic meaning of `consignment` in the payload file is based on the definition available at `http://edi3.org/contexts/Consignment`. It also indicates that the value of `Identification` is to be considered the identifer of the Consignment resource (TODO: link @id to Identifier attribute).

Note that the `@context` can be defined elsewhere too. In fact, it might fit better to have contexts specific to particular API use cases. Also, the context can be defined within the payload json data. 

### Semantic Referencing
The most important role of edi3.org in supporting linked data is to govern and expose the semantics, to be referenced by such contexts. This is documentation which can be generated straight out of the SCRDM, for example:

`GET edi3.org/contexts/Consignment` would return:

|**Consignment**|A separately identifiable collection of goods items to be transported or available to be transported from one consignor to one consignee via one or more modes of transport where each consignment is the subject of one single transport contract.||
|--------|------------------|--------|
|*ConsignmentItem*|A consignment item included in this consignment of goods.|`edi3.org/contexts/ConsignmentItem`|
|*TransportEquipment*|A number of pieces of transport equipment, such as containers or similar unit load devices, in this consignment.|`edi3.org/contexts/TransportEquipment`|
|Identification|A unique identifier for this piece of the consignment.||

`GET edi3.org/contexts/TransportEquipment` would return:

|**TransportEquipment**|A piece of equipment used to hold, protect or secure cargo for transportation purposes.||
|--------|------------------|--------|
|Identification|A unique identifier for this piece of transport equipment.||
|*Contained*|A consignment contained in this piece of transport equipment.|`edi3.org/contexts/Consignment`|



## Known Implementations

Known implementations (open source or otherwise) are listed here.  Please modify this page and make a pull request to add your own.

|Provider|Implementation URL|Comments|
|--------|------------------|--------|
|  |  |  |

