---
layout: page
title: Governance
permalink: /governance/
---
# Governance

## Specification Status Lifecycle

All specifications will be tagged with a status that defines it's usability for implementers.

|Status|Definition|Usage|
|---|---|---|
|![Raw](../images/raw.svg)|Every new specification or major version starts with raw status|experimental use only|
|![Draft](../images/draft.svg)|When a specifciation is completed and testable (ie it has a working test harness) then it becomes draft|suitable for beta testing|
|![Stable](../images/stable.svg)|When a specification has a successful third party implementation (ie passes conformance test cases) then it becomes stable.|safe to implement in production systems|
|![Deprecated](../images/deprecated.svg)|When a specification is superseded by a new major version then the previous major version is deprecated|may still be used in production but should not be used for new builds|
|![Retired](../images/retired.svg)|when a specification is obsolete and should no longer be used in any production deployment then it becomes retired|remains on this site for historical reference puposes|
|![Deleted](../images/deleted.svg)|Usually applies to unsuccessful specifications that never made it to stable status|Will be removed from this site|

## Specification Version Management

Specifications will follow [semver conventions](https://semver.org/) with a major.minor.patch version numbering system (eg version 1.5.3). The following rules apply to versioning

|Version level|definition|usage|
|---|---|---|
|major|a breaking change that requires a change to consumer systems|implementers must indicate version in URL path eg api.acme.com/consignments/v1|
|minor|a functional change or enhancement that is non breaking (eg a new optional property in an API)|implementers must indicate minor version in body of message but not in URL path|
|patch|a non functional change such as a documentation update|no impact on implementers|

## Implementation Conformance

We aim to support implementers through their development efforts and conformance testing process.

* [join our slack team](http://chat.edi3.org/) and subscribe to whichever channels match your implementation needs (we have one channel per specification). You'll be able to chat directly with the team that wrote the specification and we'll do our best to help you with any questions that might arise as you build your implementation.
* Every specification will follow  [IETF "MUST", "SHOULD" "MAY"](https://www.ietf.org/rfc/rfc2119.txt) language so that it's clear what a conforming implementation means.  We will also aim to provide free open source conformance testing tools in the same GitHub repository that is used for specification development. Test your implementation using these tools.
* When you are confident that you have a conformant application then let us know by raising a ticket in the corresponding specification repository to request that your product ro service be listed on our "known implementations" list.  Attach the compliance report from the testing tool and, once verified, we'll add you to the list.

## IPR Policy and Contributions

If you would like to contribute to the development of our specifications;

* You must be a [registered UN/CEFACT expert](https://uncefact.unece.org/display/uncefactpublic/UNCEFACT+Expert+Registration). Registration will require that you agree to the [IPR Policy](https://www.unece.org/fileadmin/DAM/cefact/cf_plenary/plenary12/ECE_TRADE_C_CEFACT_2010_20_Rev2E_UpdatedIPRpolicy.pdf). This is essential in order to ensure continued royalty free availability of published UN/CEFACT standards. 
* Once you have completed the registration process then please just [join our slack team](http://chat.edi3.org/) if you have not done so already and ping us on the general channel. 
* We will add you to whichever Github teams are relevant for your contribution area.

## Current Team Membership

Is visible simply by browsing the corresponding [GitHub team membership](https://github.com/orgs/edi3/teams)


