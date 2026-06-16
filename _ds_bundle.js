/* @ds-bundle: {"format":3,"namespace":"WoonunitstehuurDesignSystem_c98620","components":[{"name":"SpecItem","sourcePath":"components/cards/SpecItem.jsx"},{"name":"UnitCard","sourcePath":"components/cards/UnitCard.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"}],"sourceHashes":{"components/cards/SpecItem.jsx":"7724a0673256","components/cards/UnitCard.jsx":"8e78090c191e","components/core/Badge.jsx":"166b205364b5","components/core/Button.jsx":"aa5cc8c11401","components/core/IconButton.jsx":"92f3d28aa67e","components/forms/Input.jsx":"d5ad6faa48e1","components/forms/Select.jsx":"db635299ba7a","components/forms/Textarea.jsx":"04d5f16c588c","ui_kits/website/AanbodScreen.jsx":"7de03ee8a0bd","ui_kits/website/ContactScreen.jsx":"fd27e8735fe6","ui_kits/website/Footer.jsx":"f2ee8061a808","ui_kits/website/Header.jsx":"b1e1f3cdbba3","ui_kits/website/Hero.jsx":"a1f03b14a9b3","ui_kits/website/HomeScreen.jsx":"70ef1453a15e","ui_kits/website/UnitDetailScreen.jsx":"335171e4ef93","ui_kits/website/data.js":"3a1e646e2975","ui_kits/website/icons.jsx":"2f1fb7107eb6","ui_kits/website/responsive.js":"240987a1c8a0"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.WoonunitstehuurDesignSystem_c98620 = window.WoonunitstehuurDesignSystem_c98620 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/cards/SpecItem.jsx
try { (() => {
/**
 * Icon + label spec line, used inside unit cards and detail pages.
 * Pass an icon node plus a short label (e.g. "2 slaapkamers").
 */
function SpecItem({
  icon,
  label,
  value,
  direction = 'row',
  style = {}
}) {
  const isCol = direction === 'column';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: isCol ? 'column' : 'row',
      alignItems: isCol ? 'flex-start' : 'center',
      gap: isCol ? 6 : 9,
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 34,
      height: 34,
      flex: 'none',
      borderRadius: 'var(--radius-sm)',
      background: 'var(--gold-50)',
      color: 'var(--gold-700)'
    }
  }, icon), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      lineHeight: 1.3
    }
  }, value != null && /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: 15,
      color: 'var(--text-strong)'
    }
  }, value), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: value != null ? 12.5 : 14,
      color: value != null ? 'var(--text-muted)' : 'var(--text-body)',
      fontWeight: value != null ? 500 : 600
    }
  }, label)));
}
Object.assign(__ds_scope, { SpecItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/SpecItem.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Status badge — compact, for availability and state labels.
 * tone: neutral | gold | success | info | warning | danger
 */
function Badge({
  tone = 'neutral',
  solid = false,
  dot = false,
  children,
  style = {},
  ...rest
}) {
  const map = {
    neutral: {
      soft: {
        bg: 'var(--sand-100)',
        fg: 'var(--sand-700)'
      },
      solid: {
        bg: 'var(--sand-700)',
        fg: '#fff'
      },
      dotc: 'var(--sand-500)'
    },
    gold: {
      soft: {
        bg: 'var(--gold-100)',
        fg: 'var(--gold-700)'
      },
      solid: {
        bg: 'var(--gold-500)',
        fg: 'var(--ink-900)'
      },
      dotc: 'var(--gold-500)'
    },
    success: {
      soft: {
        bg: 'var(--success-100)',
        fg: '#3a5c36'
      },
      solid: {
        bg: 'var(--success-500)',
        fg: '#fff'
      },
      dotc: 'var(--success-500)'
    },
    info: {
      soft: {
        bg: 'var(--info-100)',
        fg: '#2c5570'
      },
      solid: {
        bg: 'var(--info-500)',
        fg: '#fff'
      },
      dotc: 'var(--info-500)'
    },
    warning: {
      soft: {
        bg: 'var(--warning-100)',
        fg: '#8a6320'
      },
      solid: {
        bg: 'var(--warning-500)',
        fg: '#fff'
      },
      dotc: 'var(--warning-500)'
    },
    danger: {
      soft: {
        bg: 'var(--danger-100)',
        fg: '#8a352c'
      },
      solid: {
        bg: 'var(--danger-500)',
        fg: '#fff'
      },
      dotc: 'var(--danger-500)'
    }
  };
  const t = map[tone] || map.neutral;
  const c = solid ? t.solid : t.soft;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 12.5,
      lineHeight: 1,
      letterSpacing: '0.01em',
      padding: '6px 11px',
      borderRadius: 'var(--radius-pill)',
      background: c.bg,
      color: c.fg,
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: solid ? 'currentColor' : t.dotc
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/cards/UnitCard.jsx
try { (() => {
/**
 * Listing card for a rentable woonunit. Image, availability badge, title,
 * spec row, price, and CTA. Lifts on hover.
 */
function UnitCard({
  image,
  title,
  subtitle,
  badge,
  // { tone, label }
  specs = [],
  // [{ icon, label, value }]
  price,
  // e.g. "€ 595"
  pricePeriod = 'p/mnd',
  ctaLabel = 'Bekijk unit',
  onClick,
  href,
  style = {}
}) {
  const [hover, setHover] = React.useState(false);
  const Wrap = href ? 'a' : 'div';
  return /*#__PURE__*/React.createElement(Wrap, {
    href: href,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      textDecoration: 'none',
      cursor: href || onClick ? 'pointer' : 'default',
      boxShadow: hover ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
      transform: hover ? 'translateY(-4px)' : 'none',
      transition: 'box-shadow var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out)',
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '4 / 3',
      overflow: 'hidden',
      background: 'var(--sand-100)'
    }
  }, image && /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: title,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block',
      transform: hover ? 'scale(1.04)' : 'scale(1)',
      transition: 'transform var(--dur-slow) var(--ease-out)'
    }
  }), badge && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 14,
      left: 14
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: badge.tone || 'success',
    solid: true,
    dot: true
  }, badge.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 20,
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 21,
      letterSpacing: '-0.01em',
      color: 'var(--text-strong)'
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '4px 0 0',
      fontSize: 14,
      color: 'var(--text-muted)'
    }
  }, subtitle)), specs.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '14px 18px',
      paddingTop: 4,
      borderTop: '1px solid var(--border-subtle)'
    }
  }, specs.map((sp, i) => /*#__PURE__*/React.createElement(__ds_scope.SpecItem, {
    key: i,
    icon: sp.icon,
    label: sp.label,
    value: sp.value
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 12
    }
  }, price && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 26,
      color: 'var(--text-strong)'
    }
  }, price), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, pricePeriod)), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      fontWeight: 600,
      fontSize: 14.5,
      color: 'var(--gold-700)'
    }
  }, ctaLabel, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.4",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      transform: hover ? 'translateX(3px)' : 'none',
      transition: 'transform var(--dur-fast) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14M13 6l6 6-6 6"
  }))))));
}
Object.assign(__ds_scope, { UnitCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/UnitCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Woonunitstehuur primary action button.
 * Gold for primary CTAs, solid ink for secondary, outline & ghost for low emphasis.
 */
function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  as = 'button',
  href,
  onClick,
  type = 'button',
  children,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      fontSize: 14,
      padding: '0 16px',
      height: 38,
      gap: 8
    },
    md: {
      fontSize: 15,
      padding: '0 22px',
      height: 46,
      gap: 9
    },
    lg: {
      fontSize: 17,
      padding: '0 30px',
      height: 56,
      gap: 11
    }
  };
  const variants = {
    primary: {
      background: 'var(--gold-500)',
      color: 'var(--ink-900)',
      border: '1px solid var(--gold-500)',
      boxShadow: 'var(--shadow-sm)'
    },
    secondary: {
      background: 'var(--ink-800)',
      color: 'var(--white)',
      border: '1px solid var(--ink-800)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--ink-800)',
      border: '1px solid var(--border-strong)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--gold-700)',
      border: '1px solid transparent'
    }
  };
  const s = sizes[size] || sizes.md;
  const v = variants[variant] || variants.primary;
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const hoverStyle = !disabled && hover ? {
    primary: {
      background: 'var(--gold-600)',
      borderColor: 'var(--gold-600)'
    },
    secondary: {
      background: 'var(--ink-700)',
      borderColor: 'var(--ink-700)'
    },
    outline: {
      background: 'var(--sand-100)',
      borderColor: 'var(--ink-800)'
    },
    ghost: {
      background: 'var(--gold-50)'
    }
  }[variant] : {};
  const Tag = as === 'a' ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: as === 'a' ? href : undefined,
    type: as === 'button' ? type : undefined,
    onClick: disabled ? undefined : onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
    disabled: as === 'button' ? disabled : undefined,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: s.gap,
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: s.fontSize,
      letterSpacing: '0.01em',
      lineHeight: 1,
      height: s.height,
      padding: s.padding,
      width: fullWidth ? '100%' : 'auto',
      borderRadius: 'var(--radius-pill)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      textDecoration: 'none',
      whiteSpace: 'nowrap',
      opacity: disabled ? 0.45 : 1,
      transition: 'background var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)',
      transform: active && !disabled ? 'translateY(1px)' : 'none',
      ...v,
      ...hoverStyle,
      ...style
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Square/circular icon-only button. Use for compact actions (close, nav, call).
 */
function IconButton({
  variant = 'outline',
  size = 'md',
  round = false,
  disabled = false,
  label,
  onClick,
  children,
  style = {},
  ...rest
}) {
  const dim = {
    sm: 36,
    md: 44,
    lg: 52
  }[size] || 44;
  const variants = {
    primary: {
      background: 'var(--gold-500)',
      color: 'var(--ink-900)',
      border: '1px solid var(--gold-500)'
    },
    secondary: {
      background: 'var(--ink-800)',
      color: 'var(--white)',
      border: '1px solid var(--ink-800)'
    },
    outline: {
      background: 'var(--surface-card)',
      color: 'var(--ink-800)',
      border: '1px solid var(--border-strong)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--ink-700)',
      border: '1px solid transparent'
    }
  };
  const [hover, setHover] = React.useState(false);
  const hoverBg = !disabled && hover ? {
    primary: {
      background: 'var(--gold-600)'
    },
    secondary: {
      background: 'var(--ink-700)'
    },
    outline: {
      background: 'var(--sand-100)'
    },
    ghost: {
      background: 'var(--sand-100)'
    }
  }[variant] : {};
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    title: label,
    onClick: disabled ? undefined : onClick,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: dim,
      height: dim,
      borderRadius: round ? 'var(--radius-pill)' : 'var(--radius-md)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      transition: 'background var(--dur-fast) var(--ease-out)',
      ...variants[variant],
      ...hoverBg,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Text input with optional label, helper text, and error state.
 */
function Input({
  label,
  helper,
  error,
  id,
  type = 'text',
  iconLeft = null,
  fullWidth = true,
  style = {},
  ...rest
}) {
  const autoId = React.useId();
  const fieldId = id || autoId;
  const [focus, setFocus] = React.useState(false);
  const borderColor = error ? 'var(--danger-500)' : focus ? 'var(--gold-500)' : 'var(--border-default)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: fullWidth ? '100%' : 'auto',
      fontFamily: 'var(--font-body)'
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      display: 'block',
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--text-strong)',
      marginBottom: 7
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9,
      background: 'var(--surface-card)',
      border: `1px solid ${borderColor}`,
      borderRadius: 'var(--radius-md)',
      padding: '0 14px',
      height: 48,
      boxShadow: focus ? 'var(--ring-focus)' : 'none',
      transition: 'border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)'
    }
  }, iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-subtle)',
      display: 'flex'
    }
  }, iconLeft), /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    type: type,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      color: 'var(--text-strong)',
      height: '100%',
      ...style
    }
  }, rest))), (helper || error) && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      marginTop: 6,
      color: error ? 'var(--danger-500)' : 'var(--text-muted)'
    }
  }, error || helper));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Native select styled to match Input.
 */
function Select({
  label,
  helper,
  error,
  id,
  options = [],
  placeholder,
  fullWidth = true,
  style = {},
  ...rest
}) {
  const autoId = React.useId();
  const fieldId = id || autoId;
  const [focus, setFocus] = React.useState(false);
  const borderColor = error ? 'var(--danger-500)' : focus ? 'var(--gold-500)' : 'var(--border-default)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: fullWidth ? '100%' : 'auto',
      fontFamily: 'var(--font-body)'
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      display: 'block',
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--text-strong)',
      marginBottom: 7
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      border: `1px solid ${borderColor}`,
      borderRadius: 'var(--radius-md)',
      background: 'var(--surface-card)',
      height: 48,
      boxShadow: focus ? 'var(--ring-focus)' : 'none',
      transition: 'border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: fieldId,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    defaultValue: placeholder ? '' : undefined,
    style: {
      appearance: 'none',
      WebkitAppearance: 'none',
      border: 'none',
      outline: 'none',
      background: 'transparent',
      width: '100%',
      height: '100%',
      padding: '0 40px 0 14px',
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      color: 'var(--text-strong)',
      cursor: 'pointer',
      ...style
    }
  }, rest), placeholder && /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder), options.map(o => {
    const val = typeof o === 'string' ? o : o.value;
    const lab = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: val,
      value: val
    }, lab);
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 14,
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      color: 'var(--text-subtle)',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 9l6 6 6-6"
  })))), (helper || error) && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      marginTop: 6,
      color: error ? 'var(--danger-500)' : 'var(--text-muted)'
    }
  }, error || helper));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Multi-line text area styled to match Input.
 */
function Textarea({
  label,
  helper,
  error,
  id,
  rows = 4,
  fullWidth = true,
  style = {},
  ...rest
}) {
  const autoId = React.useId();
  const fieldId = id || autoId;
  const [focus, setFocus] = React.useState(false);
  const borderColor = error ? 'var(--danger-500)' : focus ? 'var(--gold-500)' : 'var(--border-default)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: fullWidth ? '100%' : 'auto',
      fontFamily: 'var(--font-body)'
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      display: 'block',
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--text-strong)',
      marginBottom: 7
    }
  }, label), /*#__PURE__*/React.createElement("textarea", _extends({
    id: fieldId,
    rows: rows,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      resize: 'vertical',
      boxSizing: 'border-box',
      border: `1px solid ${borderColor}`,
      borderRadius: 'var(--radius-md)',
      background: 'var(--surface-card)',
      padding: '12px 14px',
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      lineHeight: 1.5,
      color: 'var(--text-strong)',
      outline: 'none',
      boxShadow: focus ? 'var(--ring-focus)' : 'none',
      transition: 'border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)',
      ...style
    }
  }, rest)), (helper || error) && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      marginTop: 6,
      color: error ? 'var(--danger-500)' : 'var(--text-muted)'
    }
  }, error || helper));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/AanbodScreen.jsx
try { (() => {
// Aanbod (units listing) screen with filter chips. Exports window.WUAanbod
function WUAanbod({
  onNav
}) {
  const NS = window.WoonunitstehuurDesignSystem_c98620;
  const {
    UnitCard,
    Select
  } = NS;
  const I = window.WUIcons;
  const {
    UNITS
  } = window.WUData;
  const [filter, setFilter] = React.useState('Alle units');
  const chips = ['Alle units', '1–2 personen', 'Gezin', 'XL familie'];
  const specsOf = u => [{
    icon: /*#__PURE__*/React.createElement(I.Ruler, {
      size: 17
    }),
    label: u.area
  }, {
    icon: /*#__PURE__*/React.createElement(I.Bed, {
      size: 17
    }),
    value: u.bedrooms,
    label: 'slaapk.'
  }, {
    icon: /*#__PURE__*/React.createElement(I.Bath, {
      size: 17
    }),
    value: u.baths,
    label: 'badk.'
  }, {
    icon: /*#__PURE__*/React.createElement(I.Users, {
      size: 17
    }),
    value: u.persons,
    label: 'pers.'
  }];
  const list = filter === 'Alle units' ? UNITS : filter === '1–2 personen' ? UNITS.filter(u => +u.persons <= 2) : filter === 'Gezin' ? UNITS.filter(u => +u.persons > 2 && +u.persons <= 4) : UNITS.filter(u => +u.persons >= 5);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--ink-800)',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '56px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'rgba(255,255,255,0.55)',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => onNav('home'),
    style: {
      color: 'inherit',
      cursor: 'pointer'
    }
  }, "Home"), " \xA0/\xA0 Aanbod"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 900,
      fontSize: 48,
      letterSpacing: '-0.02em',
      textTransform: 'uppercase'
    }
  }, "Ons aanbod"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '14px 0 0',
      fontSize: 18,
      color: 'rgba(255,255,255,0.78)',
      maxWidth: 620
    }
  }, "Al onze woonunits zijn volledig ingericht, ge\xEFsoleerd en voorzien van airconditioning. Kies de unit die past bij uw situatie."))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '40px 24px 80px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 20,
      flexWrap: 'wrap',
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      flexWrap: 'wrap'
    }
  }, chips.map(c => /*#__PURE__*/React.createElement("button", {
    key: c,
    onClick: () => setFilter(c),
    style: {
      cursor: 'pointer',
      padding: '9px 16px',
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 14,
      border: '1px solid ' + (filter === c ? 'var(--ink-800)' : 'var(--border-default)'),
      background: filter === c ? 'var(--ink-800)' : 'transparent',
      color: filter === c ? '#fff' : 'var(--text-body)'
    }
  }, c))), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 220
    }
  }, /*#__PURE__*/React.createElement(Select, {
    options: ['Sorteer: aanbevolen', 'Prijs: laag → hoog', 'Prijs: hoog → laag', 'Oppervlakte']
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 24
    }
  }, list.map(u => /*#__PURE__*/React.createElement(UnitCard, {
    key: u.id,
    image: u.image,
    title: u.title,
    subtitle: u.subtitle,
    badge: u.badge,
    specs: specsOf(u),
    price: u.price,
    pricePeriod: u.period,
    onClick: () => onNav('unit')
  }))), list.length === 0 && /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-muted)',
      padding: '40px 0'
    }
  }, "Geen units gevonden voor deze filter.")));
}
window.WUAanbod = WUAanbod;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/AanbodScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ContactScreen.jsx
try { (() => {
// Contact screen — form + info panel, with success state. Exports window.WUContact
function WUContact({
  onNav
}) {
  const NS = window.WoonunitstehuurDesignSystem_c98620;
  const {
    Button,
    Input,
    Select,
    Textarea,
    Badge
  } = NS;
  const I = window.WUIcons;
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '56px 24px 90px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      marginBottom: 40,
      maxWidth: 620
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      fontWeight: 700,
      fontSize: 13,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--gold-700)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 24,
      height: 2,
      background: 'var(--gold-500)'
    }
  }), "Contact"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 44,
      letterSpacing: '-0.02em',
      color: 'var(--text-strong)'
    }
  }, "Vraag een offerte aan"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 18,
      lineHeight: 1.6,
      color: 'var(--text-muted)'
    }
  }, "Vertel ons over uw situatie. Wij adviseren de best passende unit en sturen u vrijblijvend een offerte \u2014 meestal binnen \xE9\xE9n werkdag.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.5fr 1fr',
      gap: 40,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      padding: 32,
      boxShadow: 'var(--shadow-sm)'
    }
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: 16,
      padding: '24px 0'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 56,
      height: 56,
      borderRadius: '50%',
      background: 'var(--success-100)',
      color: 'var(--success-500)'
    }
  }, /*#__PURE__*/React.createElement(I.Check, {
    size: 28
  })), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 26,
      color: 'var(--text-strong)'
    }
  }, "Bedankt voor uw aanvraag!"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 16,
      color: 'var(--text-muted)',
      maxWidth: 440
    }
  }, "Wij hebben uw bericht ontvangen en nemen binnen \xE9\xE9n werkdag contact met u op. Houd uw e-mail in de gaten."), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onClick: () => setSent(false)
  }, "Nieuw bericht")) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Voornaam",
    placeholder: "Voornaam"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Achternaam",
    placeholder: "Achternaam"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "E-mailadres",
    type: "email",
    placeholder: "naam@voorbeeld.nl",
    iconLeft: /*#__PURE__*/React.createElement(I.Mail, {
      size: 17
    })
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Telefoonnummer",
    type: "tel",
    placeholder: "06 \u2014 12 34 56 78",
    iconLeft: /*#__PURE__*/React.createElement(I.Phone, {
      size: 17
    })
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Type woonunit",
    placeholder: "Maak een keuze",
    options: ['Comfort Unit 30', 'Gezins Unit 42', 'Familie Unit XL', 'Weet ik nog niet']
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Gewenste periode",
    placeholder: "Maak een keuze",
    options: ['1–3 maanden', '3–6 maanden', '6–12 maanden', 'Langer dan een jaar']
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / -1'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Plaatsingsadres (postcode + plaats)",
    placeholder: "1234 AB, Plaatsnaam",
    iconLeft: /*#__PURE__*/React.createElement(I.MapPin, {
      size: 17
    })
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / -1'
    }
  }, /*#__PURE__*/React.createElement(Textarea, {
    label: "Uw situatie",
    rows: 4,
    placeholder: "Vertel ons over uw verbouwing, gewenste startdatum en eventuele wensen\u2026"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / -1',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 16,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontSize: 13.5,
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement(I.Shield, {
    size: 16,
    style: {
      color: 'var(--gold-600)'
    }
  }), " Uw gegevens worden vertrouwelijk behandeld."), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement(I.Arrow, {
      size: 18
    }),
    onClick: () => setSent(true)
  }, "Verstuur aanvraag")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--ink-800)',
      color: '#fff',
      borderRadius: 'var(--radius-lg)',
      padding: 28,
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 20
    }
  }, "Liever direct contact?"), [[/*#__PURE__*/React.createElement(I.Phone, {
    size: 18
  }), '085 — 902 6800', 'Ma–vr 08:00–18:00'], [/*#__PURE__*/React.createElement(I.Mail, {
    size: 18
  }), 'info@woonunitstehuur.nl', 'Reactie binnen één werkdag'], [/*#__PURE__*/React.createElement(I.MapPin, {
    size: 18
  }), 'Heel Nederland', 'Plaatsing op locatie']].map((row, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 42,
      height: 42,
      borderRadius: 'var(--radius-md)',
      background: 'rgba(188,149,91,0.18)',
      color: 'var(--gold-400)',
      flex: 'none'
    }
  }, row[0]), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: 16
    }
  }, row[1]), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13.5,
      color: 'rgba(255,255,255,0.6)'
    }
  }, row[2]))))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--gold-50)',
      border: '1px solid var(--gold-200)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/placing.jpg",
    alt: "Plaatsing van een woonunit met kraanwagen",
    style: {
      width: '100%',
      height: 150,
      objectFit: 'cover',
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "gold",
    solid: true
  }, "Goed om te weten"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 15,
      lineHeight: 1.6,
      color: 'var(--gold-900)'
    }
  }, "Onze units worden met een kraanwagen op uw eigen tuin of bouwkavel geplaatst \u2014 meestal binnen 1 tot 2 werkdagen na akkoord.")))))));
}
window.WUContact = WUContact;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ContactScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
// Site footer — dark, reversed logo, columns, contact. Exports window.WUFooter
function WUFooter({
  onNav
}) {
  const I = window.WUIcons;
  const col = (title, items) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--gold-400)'
    }
  }, title), items.map((it, i) => /*#__PURE__*/React.createElement("a", {
    key: i,
    onClick: it.k ? () => onNav(it.k) : undefined,
    style: {
      fontSize: 15,
      color: 'rgba(255,255,255,0.72)',
      textDecoration: 'none',
      cursor: it.k ? 'pointer' : 'default'
    }
  }, it.t)));
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--ink-800)',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '64px 24px 40px',
      display: 'grid',
      gridTemplateColumns: '1.6fr 1fr 1fr 1.2fr',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18,
      maxWidth: 320
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-horizontal-white.png",
    alt: "Woonunitstehuur.nl",
    style: {
      height: 44,
      width: 'auto',
      alignSelf: 'flex-start'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 15,
      lineHeight: 1.6,
      color: 'rgba(255,255,255,0.66)'
    }
  }, "D\xE9 oplossing voor comfortabel tijdelijk wonen tijdens uw verbouwing of nieuwbouw. Volledig ingericht en op eigen terrein.")), col('Units', [{
    t: 'Comfort Unit 30',
    k: 'aanbod'
  }, {
    t: 'Gezins Unit 42',
    k: 'aanbod'
  }, {
    t: 'Familie Unit XL',
    k: 'aanbod'
  }, {
    t: 'Volledig aanbod',
    k: 'aanbod'
  }]), col('Bedrijf', [{
    t: 'Over ons'
  }, {
    t: 'Werkwijze',
    k: 'werkwijze'
  }, {
    t: 'Veelgestelde vragen'
  }, {
    t: 'Contact',
    k: 'contact'
  }]), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--gold-400)'
    }
  }, "Contact"), /*#__PURE__*/React.createElement("a", {
    href: "tel:+31859026800",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      fontSize: 15,
      color: 'rgba(255,255,255,0.82)',
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement(I.Phone, {
    size: 17,
    style: {
      color: 'var(--gold-400)'
    }
  }), " 085 \u2014 902 6800"), /*#__PURE__*/React.createElement("a", {
    href: "mailto:info@woonunitstehuur.nl",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      fontSize: 15,
      color: 'rgba(255,255,255,0.82)',
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement(I.Mail, {
    size: 17,
    style: {
      color: 'var(--gold-400)'
    }
  }), " info@woonunitstehuur.nl"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      fontSize: 15,
      color: 'rgba(255,255,255,0.82)'
    }
  }, /*#__PURE__*/React.createElement(I.MapPin, {
    size: 17,
    style: {
      color: 'var(--gold-400)'
    }
  }), " Heel Nederland"))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid rgba(255,255,255,0.10)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '20px 24px',
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 12,
      fontSize: 13.5,
      color: 'rgba(255,255,255,0.5)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Woonunitstehuur.nl \u2014 Comfortabel tijdelijk wonen"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("a", {
    style: {
      color: 'inherit',
      textDecoration: 'none'
    }
  }, "Privacybeleid"), /*#__PURE__*/React.createElement("a", {
    style: {
      color: 'inherit',
      textDecoration: 'none'
    }
  }, "Cookiebeleid"), /*#__PURE__*/React.createElement("a", {
    style: {
      color: 'inherit',
      textDecoration: 'none'
    }
  }, "Algemene voorwaarden")))));
}
window.WUFooter = WUFooter;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Header.jsx
try { (() => {
// Site header — logo, nav, phone + CTA. Collapses to a hamburger menu on mobile. Exports window.WUHeader
function WUHeader({
  onNav,
  current
}) {
  const {
    Button,
    IconButton
  } = window.WoonunitstehuurDesignSystem_c98620;
  const I = window.WUIcons;
  const isMobile = window.useIsMobile(860);
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    if (!isMobile) setOpen(false);
  }, [isMobile]);
  const nav = [{
    key: 'home',
    label: 'Home'
  }, {
    key: 'aanbod',
    label: 'Aanbod'
  }, {
    key: 'werkwijze',
    label: 'Werkwijze'
  }, {
    key: 'contact',
    label: 'Contact'
  }];
  const go = k => {
    setOpen(false);
    onNav(k);
  };
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: 'rgba(255,255,255,0.86)',
      backdropFilter: 'saturate(160%) blur(12px)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 20px',
      height: isMobile ? 64 : 76,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => go('home'),
    style: {
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-horizontal.png",
    alt: "Woonunitstehuur.nl",
    style: {
      height: isMobile ? 32 : 40,
      width: 'auto',
      display: 'block'
    }
  })), !isMobile && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 4
    }
  }, nav.map(n => /*#__PURE__*/React.createElement("a", {
    key: n.key,
    onClick: () => go(n.key),
    style: {
      cursor: 'pointer',
      padding: '8px 14px',
      borderRadius: 'var(--radius-pill)',
      fontSize: 15,
      fontWeight: 600,
      color: current === n.key ? 'var(--gold-700)' : 'var(--text-body)',
      background: current === n.key ? 'var(--gold-50)' : 'transparent'
    }
  }, n.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "tel:+31000000000",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontWeight: 700,
      fontSize: 15,
      color: 'var(--text-strong)',
      textDecoration: 'none',
      whiteSpace: 'nowrap'
    }
  }, /*#__PURE__*/React.createElement(I.Phone, {
    size: 17,
    style: {
      color: 'var(--gold-600)',
      flex: 'none'
    }
  }), " 085 \u2014 902 6800"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    onClick: () => go('contact')
  }, "Vraag offerte aan"))), isMobile && /*#__PURE__*/React.createElement(IconButton, {
    label: open ? 'Sluit menu' : 'Open menu',
    variant: "outline",
    onClick: () => setOpen(v => !v)
  }, open ? /*#__PURE__*/React.createElement(I.Arrow, {
    size: 20,
    style: {
      transform: 'rotate(-90deg)'
    }
  }) : /*#__PURE__*/React.createElement(I.Menu, {
    size: 20
  }))), isMobile && open && /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-subtle)',
      background: 'var(--surface-card)',
      boxShadow: 'var(--shadow-lg)'
    }
  }, /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      padding: '8px 16px 16px'
    }
  }, nav.map(n => /*#__PURE__*/React.createElement("a", {
    key: n.key,
    onClick: () => go(n.key),
    style: {
      cursor: 'pointer',
      padding: '14px 12px',
      borderRadius: 'var(--radius-md)',
      fontSize: 17,
      fontWeight: 600,
      borderBottom: '1px solid var(--border-subtle)',
      color: current === n.key ? 'var(--gold-700)' : 'var(--text-strong)'
    }
  }, n.label)), /*#__PURE__*/React.createElement("a", {
    href: "tel:+31000000000",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '16px 12px',
      fontWeight: 700,
      fontSize: 16,
      color: 'var(--text-strong)',
      textDecoration: 'none',
      whiteSpace: 'nowrap'
    }
  }, /*#__PURE__*/React.createElement(I.Phone, {
    size: 18,
    style: {
      color: 'var(--gold-600)',
      flex: 'none'
    }
  }), " 085 \u2014 902 6800"), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 6
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    fullWidth: true,
    onClick: () => go('contact')
  }, "Vraag offerte aan")))));
}
window.WUHeader = WUHeader;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
// Hero section — "Kaart" layout (bright, airy, rounded photo card). Exports window.WUHero
function WUHero({
  onNav
}) {
  const NS = window.WoonunitstehuurDesignSystem_c98620;
  const {
    Button,
    Badge
  } = NS;
  const I = window.WUIcons;
  const isMobile = window.useIsMobile(760);
  const HEADLINE = 'Comfortabel tijdelijk wonen';
  const SUB = 'Of u nu bouwt of verbouwt — wij plaatsen een volledig ingerichte woonunit op uw eigen terrein. Zo blijft u dicht bij huis, met al het comfort van een vaste woning.';
  const STATS = [['1–2', 'werkdagen plaatsing'], ['100%', 'ingericht & klaar'], ['Heel', 'Nederland']];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      background: 'var(--surface-page)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: -120,
      right: -120,
      width: 480,
      height: 480,
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(188,149,91,0.16), rgba(188,149,91,0) 70%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: isMobile ? '44px 20px 56px' : '72px 24px',
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : '0.92fr 1.08fr',
      gap: isMobile ? 40 : 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      fontWeight: 700,
      fontSize: 13,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--gold-700)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 24,
      height: 2,
      background: 'var(--gold-500)'
    }
  }), "Tijdelijk wonen op eigen terrein"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 900,
      fontSize: isMobile ? 38 : 56,
      lineHeight: 1.04,
      letterSpacing: '-0.02em',
      textTransform: 'uppercase',
      color: 'var(--text-strong)'
    }
  }, HEADLINE), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: isMobile ? 16.5 : 18,
      lineHeight: 1.65,
      color: 'var(--text-muted)',
      maxWidth: 480
    }
  }, SUB), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap',
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    fullWidth: isMobile,
    iconRight: /*#__PURE__*/React.createElement(I.Arrow, {
      size: 18
    }),
    onClick: () => onNav('aanbod')
  }, "Bekijk het aanbod"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "lg",
    fullWidth: isMobile,
    onClick: () => onNav('contact')
  }, "Vraag offerte aan")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 28,
      marginTop: 16,
      flexWrap: 'wrap'
    }
  }, STATS.map(([a, b], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 28,
      color: 'var(--text-strong)'
    }
  }, a), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13.5,
      color: 'var(--text-muted)'
    }
  }, b))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-xl)',
      aspectRatio: '4 / 3.2'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/interior-dining.jpg",
    alt: "Comfortabel ingerichte woonunit \u2014 eethoek met uitzicht op de bouw",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: isMobile ? '50%' : -24,
      bottom: isMobile ? -28 : -24,
      transform: isMobile ? 'translateX(-50%)' : 'none',
      width: isMobile ? 'calc(100% - 28px)' : 'auto',
      justifyContent: isMobile ? 'center' : 'flex-start',
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-lg)',
      padding: '18px 22px',
      boxShadow: 'var(--shadow-lg)',
      border: '1px solid var(--border-subtle)',
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "success",
    dot: true
  }, "Direct beschikbaar"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 34,
      background: 'var(--border-subtle)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 22,
      color: 'var(--text-strong)'
    }
  }, "vanaf \u20AC 595"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      color: 'var(--text-muted)'
    }
  }, "per maand, volledig ingericht"))))));
}
window.WUHero = WUHero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeScreen.jsx
try { (() => {
// Home screen. Exports window.WUHome
function WUHome({
  onNav
}) {
  const NS = window.WoonunitstehuurDesignSystem_c98620;
  const {
    Button,
    UnitCard,
    Badge
  } = NS;
  const I = window.WUIcons;
  const {
    UNITS,
    USPS,
    STEPS
  } = window.WUData;
  const Eyebrow = ({
    children,
    light
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      fontWeight: 700,
      fontSize: 13,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: light ? 'var(--gold-400)' : 'var(--gold-700)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 24,
      height: 2,
      background: 'var(--gold-500)'
    }
  }), children);
  const specsOf = u => [{
    icon: /*#__PURE__*/React.createElement(I.Ruler, {
      size: 17
    }),
    label: u.area
  }, {
    icon: /*#__PURE__*/React.createElement(I.Bed, {
      size: 17
    }),
    value: u.bedrooms,
    label: 'slaapk.'
  }, {
    icon: /*#__PURE__*/React.createElement(I.Users, {
      size: 17
    }),
    value: u.persons,
    label: 'pers.'
  }];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(window.WUHero, {
    onNav: onNav
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '72px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 24
    }
  }, USPS.map((u, i) => {
    const Ico = I[u.icon];
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 52,
        height: 52,
        borderRadius: 'var(--radius-md)',
        background: 'var(--gold-50)',
        color: 'var(--gold-700)'
      }
    }, /*#__PURE__*/React.createElement(Ico, {
      size: 24
    })), /*#__PURE__*/React.createElement("h3", {
      style: {
        margin: '4px 0 0',
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 18,
        color: 'var(--text-strong)'
      }
    }, u.title), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 14.5,
        lineHeight: 1.55,
        color: 'var(--text-muted)'
      }
    }, u.text));
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-page)',
      borderTop: '1px solid var(--border-subtle)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '72px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      marginBottom: 32,
      gap: 24,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Ons aanbod"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 38,
      letterSpacing: '-0.01em',
      color: 'var(--text-strong)'
    }
  }, "Kies uw woonunit")), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    iconRight: /*#__PURE__*/React.createElement(I.Arrow, {
      size: 17
    }),
    onClick: () => onNav('aanbod')
  }, "Bekijk alle units")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 24
    }
  }, UNITS.map(u => /*#__PURE__*/React.createElement(UnitCard, {
    key: u.id,
    image: u.image,
    title: u.title,
    subtitle: u.subtitle,
    badge: u.badge,
    specs: specsOf(u),
    price: u.price,
    pricePeriod: u.period,
    onClick: () => onNav('unit')
  }))))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '80px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      marginBottom: 40,
      alignItems: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Zo werkt het"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 38,
      letterSpacing: '-0.01em',
      color: 'var(--text-strong)'
    }
  }, "In vier stappen geregeld")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 24
    }
  }, STEPS.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      position: 'relative',
      padding: '28px 22px',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-sm)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 900,
      fontSize: 34,
      color: 'var(--gold-300)',
      lineHeight: 1
    }
  }, s.n), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '14px 0 8px',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 18,
      color: 'var(--text-strong)'
    }
  }, s.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14.5,
      lineHeight: 1.55,
      color: 'var(--text-muted)'
    }
  }, s.text))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--gold-500)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '56px 24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 28,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 32,
      letterSpacing: '-0.01em',
      color: 'var(--ink-900)'
    }
  }, "Klaar voor uw tijdelijke woning?"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 17,
      color: 'rgba(20,20,19,0.72)'
    }
  }, "Vraag vrijblijvend een offerte aan \u2014 wij reageren binnen \xE9\xE9n werkdag.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    iconLeft: /*#__PURE__*/React.createElement(I.Phone, {
      size: 18
    }),
    as: "a",
    href: "tel:+31859026800"
  }, "Bel direct"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "lg",
    onClick: () => onNav('contact'),
    style: {
      borderColor: 'var(--ink-800)',
      color: 'var(--ink-900)'
    }
  }, "Offerte aanvragen")))));
}
window.WUHome = WUHome;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/UnitDetailScreen.jsx
try { (() => {
// Unit detail screen — gallery, specs, inline request form. Exports window.WUUnit
function WUUnit({
  onNav
}) {
  const NS = window.WoonunitstehuurDesignSystem_c98620;
  const {
    Button,
    Badge,
    Input,
    Select,
    SpecItem
  } = NS;
  const I = window.WUIcons;
  const u = window.WUData.UNITS[1]; // Gezins Unit 42
  const gallery = ['../../assets/interior-dining.jpg', '../../assets/interior-bedroom.jpg', '../../assets/unit-gezin.jpg'];
  const [active, setActive] = React.useState(0);
  const features = ['Volledig ingerichte woonkamer', 'Keuken met inbouwapparatuur', 'Aparte badkamer met douche', 'Twee gescheiden slaapkamers', 'Airconditioning & vloerverwarming', 'Hoogwaardige PIR-isolatie'];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '32px 24px 80px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)',
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => onNav('home'),
    style: {
      color: 'inherit',
      cursor: 'pointer'
    }
  }, "Home"), " \xA0/\xA0", /*#__PURE__*/React.createElement("a", {
    onClick: () => onNav('aanbod'),
    style: {
      color: 'inherit',
      cursor: 'pointer'
    }
  }, " Aanbod"), " \xA0/\xA0 ", u.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr',
      gap: 48,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      aspectRatio: '4 / 3',
      boxShadow: 'var(--shadow-md)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: gallery[active],
    alt: u.title,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 16,
      left: 16
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: u.badge.tone,
    solid: true,
    dot: true
  }, u.badge.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginTop: 12
    }
  }, gallery.map((g, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    onClick: () => setActive(i),
    style: {
      flex: 1,
      padding: 0,
      border: '2px solid ' + (active === i ? 'var(--gold-500)' : 'transparent'),
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      cursor: 'pointer',
      background: 'none',
      aspectRatio: '4 / 3'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: g,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 36
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '0 0 16px',
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 26,
      letterSpacing: '-0.01em',
      color: 'var(--text-strong)'
    }
  }, "Wat is inbegrepen"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '12px 24px'
    }
  }, features.map((f, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      fontSize: 15.5,
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      color: 'var(--gold-600)'
    }
  }, /*#__PURE__*/React.createElement(I.Check, {
    size: 18
  })), f))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      top: 96,
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      padding: 26,
      boxShadow: 'var(--shadow-md)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      color: 'var(--gold-700)',
      fontWeight: 700,
      fontSize: 13,
      letterSpacing: '0.1em',
      textTransform: 'uppercase'
    }
  }, "Gezinsunit"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '8px 0 0',
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 30,
      letterSpacing: '-0.01em',
      color: 'var(--text-strong)'
    }
  }, u.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '8px 0 0',
      fontSize: 15,
      color: 'var(--text-muted)'
    }
  }, u.subtitle)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '16px 20px',
      padding: '18px 0',
      borderTop: '1px solid var(--border-subtle)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement(SpecItem, {
    icon: /*#__PURE__*/React.createElement(I.Ruler, {
      size: 17
    }),
    value: u.area.replace('ca. ', ''),
    label: "oppervlak",
    direction: "column"
  }), /*#__PURE__*/React.createElement(SpecItem, {
    icon: /*#__PURE__*/React.createElement(I.Bed, {
      size: 17
    }),
    value: u.bedrooms,
    label: "slaapkamers",
    direction: "column"
  }), /*#__PURE__*/React.createElement(SpecItem, {
    icon: /*#__PURE__*/React.createElement(I.Users, {
      size: 17
    }),
    value: u.persons,
    label: "personen",
    direction: "column"
  }), /*#__PURE__*/React.createElement(SpecItem, {
    icon: /*#__PURE__*/React.createElement(I.Bath, {
      size: 17
    }),
    value: u.baths,
    label: "badkamer",
    direction: "column"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 34,
      color: 'var(--text-strong)'
    }
  }, u.price), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      color: 'var(--text-muted)'
    }
  }, u.period, " \xB7 excl. transport")), /*#__PURE__*/React.createElement(Input, {
    label: "Gewenste startdatum",
    type: "date"
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Huurperiode",
    placeholder: "Maak een keuze",
    options: ['1–3 maanden', '3–6 maanden', '6–12 maanden', 'Langer dan een jaar']
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    fullWidth: true,
    iconRight: /*#__PURE__*/React.createElement(I.Arrow, {
      size: 18
    }),
    onClick: () => onNav('contact')
  }, "Vraag deze unit aan"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "md",
    fullWidth: true,
    iconLeft: /*#__PURE__*/React.createElement(I.Phone, {
      size: 17
    }),
    as: "a",
    href: "tel:+31859026800"
  }, "085 \u2014 902 6800"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontSize: 13.5,
      color: 'var(--text-muted)',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(I.Clock, {
    size: 15
  }), " Reactie binnen \xE9\xE9n werkdag"))));
}
window.WUUnit = WUUnit;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/UnitDetailScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/data.js
try { (() => {
// Demo content for the Woonunitstehuur website UI kit.
const UNITS = [{
  id: 'comfort-30',
  image: '../../assets/unit-comfort.jpg',
  title: 'Comfort Unit 30',
  subtitle: 'Compacte luxe voor 1–2 personen',
  badge: {
    tone: 'success',
    label: 'Direct beschikbaar'
  },
  area: 'ca. 30 m²',
  bedrooms: '1',
  persons: '2',
  baths: '1',
  price: '€ 595',
  period: 'p/mnd'
}, {
  id: 'gezin-42',
  image: '../../assets/unit-gezin.jpg',
  title: 'Gezins Unit 42',
  subtitle: 'Ruimte voor het hele gezin tijdens de verbouwing',
  badge: {
    tone: 'gold',
    label: 'Populair'
  },
  area: 'ca. 42 m²',
  bedrooms: '2',
  persons: '4',
  baths: '1',
  price: '€ 745',
  period: 'p/mnd'
}, {
  id: 'familie-xl',
  image: '../../assets/unit-familie.jpg',
  title: 'Familie Unit XL',
  subtitle: 'Onze ruimste unit met drie slaapkamers',
  badge: {
    tone: 'warning',
    label: 'Op aanvraag'
  },
  area: 'ca. 55 m²',
  bedrooms: '3',
  persons: '5',
  baths: '2',
  price: '€ 895',
  period: 'p/mnd'
}];
const USPS = [{
  icon: 'Truck',
  title: 'Binnen 1–2 dagen geplaatst',
  text: 'Met onze kraanwagen plaatsen wij de unit op uw eigen terrein of bouwkavel.'
}, {
  icon: 'Home',
  title: 'Volledig ingericht',
  text: 'Woonkamer, keuken met inbouwapparatuur, badkamer en gescheiden slaapkamers.'
}, {
  icon: 'Snowflake',
  title: 'Airco & PIR-isolatie',
  text: 'Een aangenaam binnenklimaat, het hele jaar door — zomer én winter.'
}, {
  icon: 'Shield',
  title: 'Flexibele huurtermijn',
  text: 'Huur per maand, voor korte én langere periodes. Zonder gedoe.'
}];
const STEPS = [{
  n: '01',
  title: 'Vraag aan',
  text: 'Vertel ons over uw situatie en gewenste periode via het formulier of telefonisch.'
}, {
  n: '02',
  title: 'Advies & offerte',
  text: 'Wij adviseren de best passende unit en sturen u een heldere offerte op maat.'
}, {
  n: '03',
  title: 'Plaatsing',
  text: 'Wij bezorgen en plaatsen de unit op uw terrein. Direct klaar voor gebruik.'
}, {
  n: '04',
  title: 'Comfortabel wonen',
  text: 'U blijft dicht bij huis wonen, met al het comfort van een vaste woning.'
}];
window.WUData = {
  UNITS,
  USPS,
  STEPS
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/data.js", error: String((e && e.message) || e) }); }

// ui_kits/website/icons.jsx
try { (() => {
// Shared Lucide-style line icons (2px stroke). Substitutes for a brand icon set.
const _i = (paths, w = 20) => props => {
  const size = props && props.size || w;
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    style: props && props.style || undefined
  }, paths.map((d, i) => React.createElement('path', {
    key: i,
    d
  })));
};
const Icons = {
  Ruler: _i(['M3 8h18v8H3z', 'M7 8v3', 'M11 8v4', 'M15 8v3', 'M19 8v4']),
  Bed: _i(['M3 18v-6h18v6', 'M3 12V7a1 1 0 0 1 1-1h6v6', 'M21 12V9a2 2 0 0 0-2-2h-7']),
  Users: _i(['M16 19a4 4 0 0 0-8 0', 'M12 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6', 'M20 19a3 3 0 0 0-4-2.8', 'M4 19a3 3 0 0 1 4-2.8']),
  Bath: _i(['M4 12h16v3a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z', 'M6 12V6a2 2 0 0 1 2-2 2 2 0 0 1 2 2', 'M6 19l-1 2', 'M19 19l1 2']),
  Phone: _i(['M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z']),
  Mail: _i(['M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z', 'm3 7 9 6 9-6']),
  Arrow: _i(['M5 12h14', 'M13 6l6 6-6 6']),
  ArrowDown: _i(['M12 5v14', 'M6 13l6 6 6-6']),
  Check: _i(['M20 6 9 17l-5-5']),
  Clock: _i(['M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z', 'M12 7v5l3 2']),
  Truck: _i(['M3 6h11v9H3z', 'M14 9h4l3 3v3h-7z', 'M7 18a2 2 0 1 0 0 .01', 'M18 18a2 2 0 1 0 0 .01']),
  Shield: _i(['M12 3l8 3v6c0 4-3.5 7.5-8 9-4.5-1.5-8-5-8-9V6z', 'M9 12l2 2 4-4']),
  Snowflake: _i(['M12 3v18', 'M3 12h18', 'm6 6 12 12', 'm18 6-12 12']),
  MapPin: _i(['M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11z', 'M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6']),
  Menu: _i(['M3 6h18', 'M3 12h18', 'M3 18h18']),
  Star: _i(['M12 3.5l2.6 5.5 5.9.8-4.3 4.1 1 5.9-5.2-2.8-5.2 2.8 1-5.9-4.3-4.1 5.9-.8z']),
  Home: _i(['M3 11l9-8 9 8', 'M5 10v10h14V10'])
};
window.WUIcons = Icons;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/icons.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/responsive.js
try { (() => {
// Tiny shared hook: is the viewport mobile-width? Exports window.useIsMobile
function useIsMobile(bp) {
  const limit = bp || 760;
  const [mobile, setMobile] = React.useState(() => typeof window !== 'undefined' ? window.innerWidth <= limit : false);
  React.useEffect(() => {
    const onResize = () => setMobile(window.innerWidth <= limit);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [limit]);
  return mobile;
}
window.useIsMobile = useIsMobile;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/responsive.js", error: String((e && e.message) || e) }); }

__ds_ns.SpecItem = __ds_scope.SpecItem;

__ds_ns.UnitCard = __ds_scope.UnitCard;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Textarea = __ds_scope.Textarea;

})();
