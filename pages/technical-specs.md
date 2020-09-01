---
layout: page
title: Technical Specs
permalink: /technical-specs/
---
# Technical Specs

The edi3.org API specifications are designed to support peer-to-peer data exchange as well as more traditional peer-hub-peer exchanges. For peer to peer exchanges, the client (sender) needs a way to discover the location (URL) of a service and the type of messages the service supports. That is the purpose of the edi3.org technical specifications.

## Overview of Technical Specifications

A suite of conventions and patterns about the consistent use of existing W3C/IETF technical standards that collectively support peer-to-peer interoperability at the technical layer between web platform implementations of UN/CEFACT API specifications.  The use cases are:

* Resource discovery: As an interested party, when I know an identifier like a Container BIC, VAT ID or BoL number, then I need a way to discover and access the corresponding web resource. 
* Identity and access: As a web resource owner, I need consistent semantics about identity claims so that I can easily know whether to grant access to any interested party.
* Events: As an interested party that has discovered a web resource, I need a way to subscribe to the resource so that I can be notified of changes (eg “your consignment has been cleared”). 
* Notary: As an interested third party, I need a way to verify the integrity of transactions before I make any economic or legal commitments. 

![Resource Discovery Diagram](../images/edi3-rdf.png)

Put simply, these specifciations allow an interested party that has a key identifier such as a Bill of Lading number to answer three questions;

1.	“Where is this BoL?” – using DNS plus some UN/CEFACT semantic standards.
2.	“Am I allowed to see this BoL?” – using OIDC plus some UN/CEFACT semantic standards.
3.	“Will I understand this BoL?” – using JSON plus some UN/CEFACT semantic standards.

One very valuable aspect of this web resource discovery framework is that it can bridge existing EDIFACT or XML based document exchange implementations and future web API frameworks.  For example, a regulator might receive a traditional CUSCAR EDIFACT cargo report that references a bill of lading.  The Authority could then use this framework to discover and access the actual BoL from a conformant web API provided by a trade data pipeline that holds the BoL.

The technical specifications also include events structure and notary service. These support two essential functions after a web resource has been successfully discovered;

1. "Tell me when there is a change" - using W3C WebSub plus some UN/CEFACT semantic standards
2. "Give me a non-repudiable record of all changes" - using a notary API specifciation built on UN/CEFACT standards.

Each specification is described below.

## Resource Discovery

The Domain Name System (DNS) is one of the internet’s most fundamental protocols - defined by the IETF as RFC 1035.  It’s primary purpose is to map a domain name (eg www.unece.org) to an internet protocol (IP) address (eg  80.80.229.213). However, there are many different DNS record types that can be used for all kinds of different lookup purposes. For example, the European e-invoicing initiative (peppol.eu) uses DNS for the discovery of invoicing web service metadata.  A major advantage of using DNS for lookups is that it is ubiquitous, very scalable, and very durable (the working internet depends on it!). This deliverable will define some standard semantics for the use of DNS records for web resource location discovery.

## Resource Description

JavaScript Object Notation (JSON) is the most ubiquitous syntax for the representation of web resources – overtaking XML some years ago.  JSON is managed by json-schema.org and is being contributed to IETF. Like XML, JSON is just a syntax and must be used together will well defined semantics for systems to successfully share data. Having discovered the location of a web resource using DNS, a consumer needs to know whether the discovered web resource conforms to standard semantics that the consumer system can understand. This deliverable will define a standard JSON API and associated semantics for the description of web resources.  

## Decentralised Identifiers

Open ID Connect (OIDC) is a ubiquitous technical protocol for authentication and authorisation for web resources (a common example is websites that offer their customers the ability to “sign in with Facebook”).  OIDC identifies three key roles; the “identity provider” (typically a registration authority with strong identity processes such as government or a bank), the “resource owner” (ie the authenticated user), and the “relying party” (ie the web platform that is seeking to verify the user identity). For example, an Australian freight forwarder might rely on the Australian government “GovPass” identity provider to verify that it’s customer (an exporter) is an accredited Australian “trusted trader”.  Essentially, instead of “sign-in with Facebook”, this is “sign in with government” – the same protocol but with higher identity integrity. OIDC communicates this information using “scopes” (what information a relying party can ask for from the identity provider) and “claims” (the specific name-value pairs that support a scope).  Apart from a few very common claims and scopes, OIDC does not define standard semantics. This deliverable will define standard semantics for OIDC claims and scopes in the international supply chain.

## Event notifications.  

W3C websub (see www.w3.org/TR/websub/) is an established protocol for publishers to update multiple subscribers about state changes of a web resource. The web resource could be a newspaper article comment thread or it could be a transport consignment. Most web resources in the international trade domain will have a defined state lifecycle.  For example, a container transport would be “stuffed”, “sealed”, “gated-in”, “loaded”, “un-loaded”, “stripped”, and so on. Similarly, an invoice resource might transition between “created”, “received”, “disputed”, “amended”, “approved”, and “paid”.  These events can happen infrequently over an extended period and so, rather than the interested party checking in with the resource owner every few minutes for several months (“has it changed?”), it would be far better for the resource owner to be able to notify any interested parties whenever a change happens.  The W3C WebSub protocol is designed for exactly this purpose. However, like the other technical specifications in this work package, WebSub leaves the detailed semantics of exactly how to say what change has happened to what resource to the implementer. Therefore, a B2B implementation of websub will require some standard semantics for event headers.  That is the purpose of this deliverable.

## Notary services.  

Some of the state transitions in a web resource can represent a significant commercial or legal commitment.  For example, the invoice transition to “approved” means that services have been accepted by the buyer and the invoice will be paid according to agreed payment terms.  This transition could be used by a seller to obtain invoice financing. But, for a lender have sufficient trust to finance the invoice, the resource itself (the invoice) and all subsequent events would need to be signed (using a token from the OIDC identity provider) and recorded in a high integrity notary. The lender can then independently verify the buyer and seller identity, the value of the invoice, and the buyer commitment to pay. A key feature of a good notary is that, once recorded, a transaction cannot be changed. This is also a fundamental feature of blockchain technologies. This deliverable to define some standard semantics for the use of blockchain ledgers as notary services.


