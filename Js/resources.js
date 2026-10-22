// ==== Parse Helper UI by Quantumult-X (918+) ====
var $parser = $parser || {};

// schema：作者声明的全部参数（不带 value）
$parser.hashSchema = function () {
  // helper 必须定义在函数体内部 —— 协议要求三个函数自包含
  function _emojiOptions() {
    return [
      { label: "Add",     value: "1"  },
      { label: "Mainland China devices", value: "2"  },
      { label: "Remove",     value: "-1" }
    ];
  }
  function _ptnOptions() {
    return [
      { label: "Original",         value: ""  },
      { label: "🅰 Letter blocks",   value: "1" },
      { label: "🄰 Letter blocks (solid)", value: "2" },
      { label: "𝐀 Bold",        value: "3" },
      { label: "𝗮 Bold lowercase",    value: "4" },
      { label: "𝔸 Double-struck",        value: "5" },
      { label: "𝕒 Double-struck lowercase",    value: "6" },
      { label: "ᵃ Superscript",        value: "7" },
      { label: "ᴬ Uppercase superscript",    value: "8" }
    ];
  }
  function _nptOptions() {
    return [
      { label: "Original",         value: ""  },
      { label: "①",            value: "1" },
      { label: "❶",            value: "2" },
      { label: "⓵",            value: "3" },
      { label: "𝟙",            value: "4" },
      { label: "¹",            value: "5" },
      { label: "₁",            value: "6" },
      { label: "𝟏",            value: "7" },
      { label: "𝟷",            value: "8" }
    ];
  }

  if ($resource.type == "server") { // server content
    return {
    version: 1,
    sections: [
      { type: "group",
        title: "✈️ Subscription Fetch",
        items: [
          { type: "switch", key: "UA", label: "User-Agent Replacement",
            onValue: "1", offValue: "" ,
            description: "When enabled, it will try to re-fetch the subscription content using Shadowrocket's User-Agent"}
          ]
      },
      {
        type: "group",
        title: "🎲 Filter & Sort",
        items: [
          { type: "tags",   key: "in",     label: "Keep (in)",
            description: "Keep nodes by keyword in the node name. Each line is an OR condition; use . on the same line for AND. Example: put Hong Kong and Taiwan on separate lines to keep nodes containing either; put Hong Kong.IPLC on the same line to require both.",
            placeholder: "e.g. Hong Kong / Hong Kong.IPLC" },
          { type: "tags",   key: "out",    label: "Remove (out)",
            description: "Remove nodes by keyword in the node name. Each line is an OR condition; use . on the same line for AND.",
            placeholder: "e.g. BGP / BGP.Trial" },
          { type: "text",   key: "regex",  label: "Regex Keep (regex)",
            description: "Keep nodes by matching the full node information with a regular expression", placeholder: "iplc" },
          { type: "text",   key: "regout", label: "Regex Remove (regout)",
            description: "Remove nodes by matching the full node information with a regular expression", placeholder: "" },
          { type: "text",   key: "sort", label: "Node Sorting (sort)",
            description: "Sort nodes. Parameters: 1 (ascending) / -1 (descending) / x (random) / custom rules (connected with > or <)", placeholder: "🇭🇰>🇯🇵>🇺🇸" }
        ]
      },
      {
        type: "group",
        title: "⛰️ Parameter Adjustment",
        items: [
          { type: "select", key: "emoji", label: "Emoji Flags (🇨🇳🇭🇰🇺🇸...)",
            description: "Add or remove region flags from node names", options: _emojiOptions() },
          { type: "text",   key: "replace", label: "Regex Replace Node Info (replace)",
            description: "Replace node information (⚠️ can match all content ⚠️), regex1@str1+regex2@str2", placeholder: "" },
          { type: "switch", key: "udp",   label: "UDP Relay",
            onValue: "1", offValue: "-1" },
          { type: "switch", key: "tfo",   label: "Fast Open",
            onValue: "1", offValue: "-1" },
          { type: "switch", key: "cert",  label: "TLS Certificate Verification",
            description: "Disabled by default", onValue: "1", offValue: "-1" },
          { type: "switch", key: "uot",   label: "UDP over TCP (SS/SSR only)",
            onValue: "1", offValue: "" },
          { type: "switch", key: "aead",  label: "VMess AEAD",
            description: "Disable VMess AEAD", onValue: "", offValue: "-1" },
          { type: "text",   key: "alpn",  label: "ALPN",
            description: "ALPN for over-tls nodes", placeholder: "h2" },
          { type: "text",   key: "host",  label: "Host",
            description: "Modify existing host; append ☠️ to add a host",
            placeholder: "" },
          { type: "text",   key: "checkurl", label: "Check URL",
            description: "server_check_url parameter",
            placeholder: "http://...", keyboard: "url" }
        ]
      },
      {
        type: "group",
        title: "🎯 Rename",
        items: [
          { type: "text", key: "rename",  label: "Node Rename (Rename)",
            description: "Format: old@new / prefix@ / @suffix; connect multiple with +; delete fields by ending with ☠️",
            placeholder: "Hong Kong@HK+@[1X]" },
          { type: "text", key: "rrname",  label: "Node Rename (emoji stays in front)",
            description: "Rename again after emoji", placeholder: "" },
          { type: "select", key: "ptn", label: "Letter Style (ptn)",
            description: "Replace English letters in node names with fancy styles 🅰/🄰/𝐀/𝗮/𝔸/𝕒/ᵃ/ᴬ ",
            options: _ptnOptions() },
          { type: "select", key: "npt", label: "Number Style (npt)",
            description: "Replace numbers in node names with fancy styles ①/❶/⓵/𝟙/¹/₁/𝟏/𝟷",
            options: _nptOptions() }
        ]
      },
      {
        type: "group",
        title: "🤖 Other Parameters",
        items: [
          { type: "select", key: "ntf",  label: "Parse Notification",
            options: [
              { label: "Default",          value: "" },
              { label: "Off",          value: "0"},
              { label: "On",          value: "1"}
            ] },
          { type: "switch", key: "info", label: "Traffic Info",
            onValue: "1", offValue: "", description: "Push subscription usage and expiration time information via notification"},
          { type: "text",   key: "flow", label: "Traffic Parameter",
            description: "Format: expire-date:total-GB:used-GB (e.g. 2026-12-31:1000:54)",
            placeholder: "2026-12-31:1000:54" },
          { type: "select", key: "type", label: "Force Type",
            options: [
              { label: "Auto",         value: ""           },
              { label: "Nodes",        value: "nodes"      },
              { label: "Rule",         value: "rule"       },
              { label: "Module",       value: "module"     },
              { label: "List",         value: "list"       },
              { label: "Domain Set",   value: "domain-set" }
            ] }
        ]
      }
    ]
  };
} else if ($resource.type == "filter") { // rule content
  return {
    version: 1,
    sections: [
      {
        type: "group",
        title: "🔀 Filter",
        description: "Only takes effect on rewrite_remote / filter_remote",
        items: [
          { type: "tags", key: "in",  label: "Keep Filter Rules (in)",
            description: "Keep filters by keyword. One keyword per line (OR relationship between lines).",
            placeholder: "e.g. weibo" },
          { type: "tags", key: "out",  label: "Disable Filter/Rewrite (out)",
            description: "Disable by keyword. One keyword per line (OR relationship between lines).",
            placeholder: "e.g. weibo" },
          { type: "text", key: "policy", label: "Single Policy Group (policy)",
            description: "Name of the policy group generated by rule-set (default: Shawn)",
            placeholder: "Shawn" },
          { type: "text", key: "pset",   label: "Multiple Policy Groups (pset)",
            description: "regex1@policy1+regex2@policy2" },
          { type: "text", key: "regex",   label: "Regex Keep (regex)",
            description: "Keep content by regular expression match" },
          { type: "text", key: "regout",   label: "Regex Remove (regout)",
            description: "Remove content by regular expression match" },
          { type: "text", key: "replace",   label: "Regex Replace (replace)",
            description: "regex@new_regex — replace content with regular expression" }
        ]
      },
      {
        type : "group",
        title: "🔗 Relay Related Settings",
        items : [
          { type: "text", key: "via",    label: "via-interface (Rule Subscription)",
             description: "0 : via-interface=%TUN%. When setting up a proxy chain, rule filters need this parameter. Set the policy group to the landing policy group/node in Policy Preferences.\n" ,
             placeholder: "Just enter 0" 
          },
          { type: "text",   key: "relay", label: "Relay (Node Subscription)",
            description: "Convert the (landing) node subscription into ip/host rules pointing to the transit policy group/node.\n ⚠️ When setting up Relay, make sure to turn off the Policy Preferences setting on the subscription homepage.\n\n ⚠️ The above two should not be set in the same reference at the same time ⚠️" ,
            placeholder: "⚠️ Enter your transit policy group / node name here" },
           
        ]
      },
      {
        type: "group",
        title: "🤖 Other Parameters",
        items: [
          { type: "select", key: "ntf",  label: "Parse Notification",
            options: [
              { label: "Default",          value: "" },
              { label: "Off",          value: "0"},
              { label: "On",          value: "1"}
            ] },
          { type: "select", key: "type", label: "Force Type",
            options: [
              { label: "Auto",         value: ""           },
              { label: "Nodes",        value: "nodes"      },
              { label: "Rule",         value: "rule"       },
              { label: "Module",       value: "module"     },
              { label: "List",         value: "list"       },
              { label: "Domain Set",   value: "domain-set" }
            ] },
          { type: "switch", key: "cdn",  label: "GitHub CDN Acceleration",
            onValue: "1", offValue: "" },
          { type: "select", key: "dst", label: "Conversion Target (dst)",
            options: [
              { label: "Default (no conversion)", value: ""        },
              { label: "Rewrite",        value: "rewrite" },
              { label: "Filter",         value: "filter"  }
            ] },
          { type: "select", key: "fcr",  label: "Network Interface (fcr)",
            options: [
              { label: "Default",            value: ""  },
              { label: "Force Cellular",    value: "1" },
              { label: "Mixed Interface",        value: "2" },
              { label: "Load Balancing",        value: "3" }
            ] , description:"Force specify force-cellular / multi-interface / multi-interface-balance etc." }
        ]
      }
    ]
  };
} else { // rewrite type 
  return {
    version: 1,
    sections: [
      {
        type: "group",
        title: "🫆 Rewrite",
        description: "Only takes effect on rewrite_remote / filter_remote",
        items: [
          { type: "tags", key: "in",  label: "Keep Filter/Rewrite (in)",
            description: "Keep rewrite/filter by keyword. One keyword per line (OR relationship between lines).",
            placeholder: "e.g. weibo" },
          { type: "tags", key: "out",  label: "Disable Filter/Rewrite (out)",
            description: "Disable by keyword. One keyword per line (OR relationship between lines).",
            placeholder: "e.g. weibo" },
          { type: "tags", key: "inhn",  label: "Keep Hostnames (inhn)",
            description: "Keep related hostnames by keyword. One keyword per line (OR relationship between lines).",
            placeholder: "e.g. weibo" },
          { type: "tags", key: "outhn", label: "Remove Hostnames (outhn)",
            description: "Remove related hostnames by keyword. One keyword per line (OR relationship between lines).",
            placeholder: "e.g. tb_price" },
          { type: "text", key: "regex",   label: "Regex Keep (regex)",
            description: "Keep content by regular expression match" },
          { type: "text", key: "regout",   label: "Regex Remove (regout)",
            description: "Remove content by regular expression match" },
          { type: "text", key: "replace",   label: "Regex Replace (replace)",
            description: "regex@new_regex — replace content with regular expression" }
        ]
      },
      {
        type: "group",
        title: "🤖 Other Parameters",
        items: [
          { type: "select", key: "ntf",  label: "Parse Notification",
            options: [
              { label: "Default",          value: "" },
              { label: "Off",          value: "0"},
              { label: "On",          value: "1"}
            ] },
          { type: "select", key: "type", label: "Force Type",
            options: [
              { label: "Auto",         value: ""           },
              { label: "Nodes",        value: "nodes"      },
              { label: "Rule",         value: "rule"       },
              { label: "Module",       value: "module"     },
              { label: "List",         value: "list"       },
              { label: "Domain Set",   value: "domain-set" }
            ] },
          { type: "switch", key: "cdn",  label: "GitHub CDN Acceleration",
            onValue: "1", offValue: "" },
          { type: "select", key: "dst", label: "Conversion Target (dst)",
            options: [
              { label: "Default (no conversion)", value: ""        },
              { label: "Rewrite",        value: "rewrite" },
              { label: "Filter",         value: "filter"  }
            ] }
        ]
      }
    ]
  };
}
};