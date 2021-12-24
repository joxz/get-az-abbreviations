# get-az-abbreviations

Node.js script to download [Recommended abbreviations for Azure resource types](https://docs.microsoft.com/en-us/azure/cloud-adoption-framework/ready/azure-best-practices/resource-abbreviations) as json

Example:

```json
[
  ...
  {
    "resource_type": "VPN connection",
    "namespace": "Microsoft.Network/vpnGateways/vpnConnections",
    "abbreviation": "vcn-"
  },
  {
    "resource_type": "VPN site",
    "namespace": "Microsoft.Network/vpnGateways/vpnSites",
    "abbreviation": "vst-"
  },
  {
    "resource_type": "Virtual WAN",
    "namespace": "Microsoft.Network/virtualWans",
    "abbreviation": "vwan-"
  },
  {
    "resource_type": "Virtual desktop application group",
    "abbreviation": "vdag-"
  }
  ...
]
```
