---
layout: page
title: Governance
permalink: /governance/
---
# Governance

Specification development process follows https://rfc.unprotocols.org/spec:2/COSS/

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

* [join our slack team](https://join.slack.com/t/edi3/shared_invite/enQtNTY5OTkzMjQ0NjcyLTAxZGVlMzJmNWQ5MDBjOTRmMWViNGU0MzdhY2VkOWIwZWY3ODMxOWE4YTJmZjdiNTBkYzczZDk5Y2ViOWJlNzQ) and subscribe to whichever channels match your implementation needs (we have one channel per specification). You'll be able to chat directly with the team that wrote the specification and we'll do our best to help you with any questions that might arise as you build your implementation.
* Every specification will follow  [IETF "MUST", "SHOULD" "MAY"](https://www.ietf.org/rfc/rfc2119.txt) language so that it's clear what a conforming implementation means.  We will also aim to provide free open source conformance testing tools in the same GitHub repository that is used for specification development. Test your implementation using these tools.
* When you are confident that you have a conformant application then let us know by raising a ticket in the corresponding specification repository to request that your product ro service be listed on our "known implementations" list.  Attach the compliance report from the testing tool and, once verified, we'll add you to the list.

## Licensing & IPR Policy

IPR Policy for edi3.org is

* All edi3.org specifications are available under [GPL3.0](https://www.gnu.org/licenses/gpl-3.0.en.html) open source license.
* edi3.org does not own any IP. Ownership of all contributions remains with the contributor. 
* From time to time, edi3.org specifications may be offered as initial contributions to formal projects run by UN/CEFACT. In such cases, contributors are expected to grant ownership of their IP to the UN.


## Current Team Membership

Is visible simply by browsing the corresponding [GitHub team membership](https://github.com/orgs/edi3/teams)

## UN/CEFACT membership

* Some edi3.org members may be interested to participate in formal UN/CEFACT projects.  To do so, you must [register as a UN/CEFACT expert](https://uncefact.unece.org/display/uncefactpublic/UNCEFACT+Expert+Registration). Registration will require that you agree to the [UN/CEFACT IPR Policy](https://www.unece.org/fileadmin/DAM/cefact/cf_plenary/plenary12/ECE_TRADE_C_CEFACT_2010_20_Rev2E_UpdatedIPRpolicy.pdf).

