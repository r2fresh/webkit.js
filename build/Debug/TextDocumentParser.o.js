// Note: For maximum-speed code, see "Optimizing Code" on the Emscripten wiki, https://github.com/kripken/emscripten/wiki/Optimizing-Code
// Note: Some Emscripten settings may limit the speed of the generated code.
// Capture the output of this into a variable, if you want
(function(FUNCTION_TABLE_OFFSET, parentModule) {
  var Module = {};
  var args = [];
  Module.arguments = [];
  Module.print = parentModule.print;
  Module.printErr = parentModule.printErr;
  Module.cleanups = [];
  var H_BASE = 0;
  // Each module has its own stack
  var STACKTOP = parentModule['_malloc'](TOTAL_STACK);
  assert(STACKTOP % 8 == 0);
  var STACK_MAX = STACKTOP + TOTAL_STACK;
  Module.cleanups.push(function() {
    parentModule['_free'](STACKTOP); // XXX ensure exported
    parentModule['_free'](H_BASE);
  });
// === Auto-generated preamble library stuff ===
//========================================
// Runtime essentials
//========================================
function callRuntimeCallbacks(callbacks) {
  while(callbacks.length > 0) {
    var callback = callbacks.pop();
    var func = callback.func;
    if (typeof func === 'number') {
      func = FUNCTION_TABLE[func];
    }
    func(callback.arg === undefined ? null : callback.arg);
  }
}
var __ATINIT__ = []; // functions called during startup
function initRuntime() {
  callRuntimeCallbacks(__ATINIT__);
}
// === Body ===
H_BASE = parentModule["_malloc"](240 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 240;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore18TextDocumentParserC1ERNS_12HTMLDocumentE;
var __ZN7WebCore18TextDocumentParserD1Ev;
/* memory initializer */ allocate([119,111,114,100,45,119,114,97,112,58,32,98,114,101,97,107,45,119,111,114,100,59,32,119,104,105,116,101,45,115,112,97,99,101,58,32,112,114,101,45,119,114,97,112,59,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,228,255,255,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,224,255,255,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
var Math_min = Math.min;
function invoke_vi(index,a1) {
  try {
    Module["dynCall_vi"](index,a1);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_vii(index,a1,a2) {
  try {
    Module["dynCall_vii"](index,a1,a2);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_ii(index,a1) {
  try {
    return Module["dynCall_ii"](index,a1);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_v(index) {
  try {
    Module["dynCall_v"](index);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_iii(index,a1,a2) {
  try {
    return Module["dynCall_iii"](index,a1,a2);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_viiii(index,a1,a2,a3,a4) {
  try {
    Module["dynCall_viiii"](index,a1,a2,a3,a4);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function asmPrintInt(x, y) {
  Module.print('int ' + x + ',' + y);// + ' ' + new Error().stack);
}
function asmPrintFloat(x, y) {
  Module.print('float ' + x + ',' + y);// + ' ' + new Error().stack);
}
// EMSCRIPTEN_START_ASM
var asm = (function(global, env, buffer) {
  'almost asm';
  var HEAP8 = new global.Int8Array(buffer);
  var HEAP16 = new global.Int16Array(buffer);
  var HEAP32 = new global.Int32Array(buffer);
  var HEAPU8 = new global.Uint8Array(buffer);
  var HEAPU16 = new global.Uint16Array(buffer);
  var HEAPU32 = new global.Uint32Array(buffer);
  var HEAPF32 = new global.Float32Array(buffer);
  var HEAPF64 = new global.Float64Array(buffer);
  var STACKTOP=env.STACKTOP|0;
  var STACK_MAX=env.STACK_MAX|0;
  var tempDoublePtr=env.tempDoublePtr|0;
  var ABORT=env.ABORT|0;
  var __ZN7WebCore9HTMLNames6preTagE=env.__ZN7WebCore9HTMLNames6preTagE|0;
  var __ZN7WebCore9HTMLNames9styleAttrE=env.__ZN7WebCore9HTMLNames9styleAttrE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN7WebCore18TextDocumentParserE=(H_BASE+56)|0;
  var __THREW__ = 0;
  var threwValue = 0;
  var setjmpId = 0;
  var undef = 0;
  var tempInt = 0, tempBigInt = 0, tempBigIntP = 0, tempBigIntS = 0, tempBigIntR = 0.0, tempBigIntI = 0, tempBigIntD = 0, tempValue = 0, tempDouble = 0.0;
  var tempRet0 = 0;
  var tempRet1 = 0;
  var tempRet2 = 0;
  var tempRet3 = 0;
  var tempRet4 = 0;
  var tempRet5 = 0;
  var tempRet6 = 0;
  var tempRet7 = 0;
  var tempRet8 = 0;
  var tempRet9 = 0;
  var Math_floor=global.Math.floor;
  var Math_abs=global.Math.abs;
  var Math_sqrt=global.Math.sqrt;
  var Math_pow=global.Math.pow;
  var Math_cos=global.Math.cos;
  var Math_sin=global.Math.sin;
  var Math_tan=global.Math.tan;
  var Math_acos=global.Math.acos;
  var Math_asin=global.Math.asin;
  var Math_atan=global.Math.atan;
  var Math_atan2=global.Math.atan2;
  var Math_exp=global.Math.exp;
  var Math_log=global.Math.log;
  var Math_ceil=global.Math.ceil;
  var Math_imul=global.Math.imul;
  var abort=env.abort;
  var assert=env.assert;
  var asmPrintInt=env.asmPrintInt;
  var asmPrintFloat=env.asmPrintFloat;
  var Math_min=env.min;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_ii=env.invoke_ii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var invoke_viiii=env.invoke_viiii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore18TextDocumentParser20insertFakePreElementEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 80 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 24 | 0;
 i6 = i2 + 32 | 0;
 i7 = i4 | 0;
 HEAP32[i7 >> 2] = 0;
 i8 = i4 + 4 | 0;
 HEAP32[i8 >> 2] = 0;
 i9 = i4 + 8 | 0;
 HEAP32[i9 >> 2] = 0;
 __ZN3WTF12AtomicString3addEPKh(i3, H_BASE + 8 | 0);
 i10 = HEAP32[i3 >> 2] | 0;
 i3 = HEAP32[__ZN7WebCore9HTMLNames9styleAttrE >> 2] | 0;
 HEAP32[i5 >> 2] = i3;
 i11 = i3 | 0;
 HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
 i11 = i5 + 4 | 0;
 HEAP32[i11 >> 2] = i10;
 i3 = (i10 | 0) == 0;
 if (!i3) {
  i12 = i10 | 0;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 2;
 }
 __ZN3WTF6VectorIN7WebCore9AttributeELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i4, 16);
 i4 = HEAP32[i7 >> 2] | 0;
 i12 = HEAP32[i9 >> 2] | 0;
 i13 = HEAP32[i5 >> 2] | 0;
 HEAP32[i4 + (i12 << 3) >> 2] = i13;
 i14 = i13 | 0;
 HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 1;
 i14 = HEAP32[i5 + 4 >> 2] | 0;
 HEAP32[i4 + (i12 << 3) + 4 >> 2] = i14;
 if ((i14 | 0) != 0) {
  i13 = i14 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 2;
 }
 i13 = i12 + 1 | 0;
 HEAP32[i9 >> 2] = i13;
 i12 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   i11 = i12 | 0;
   i14 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
   if ((i14 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i12);
    break;
   } else {
    HEAP32[i11 >> 2] = i14;
    break;
   }
  }
 } while (0);
 __ZN7WebCore13QualifiedNameD1Ev(i5 | 0);
 do {
  if (!i3) {
   i5 = i10 | 0;
   i12 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i12 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    break;
   } else {
    HEAP32[i5 >> 2] = i12;
    break;
   }
  }
 } while (0);
 i10 = HEAP32[__ZN7WebCore9HTMLNames6preTagE >> 2] | 0;
 HEAP32[i6 >> 2] = 2;
 i3 = HEAP32[i10 + 12 >> 2] | 0;
 HEAP32[i6 + 4 >> 2] = i3;
 if ((i3 | 0) != 0) {
  i10 = i3 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
 }
 HEAP32[i6 + 24 >> 2] = 0;
 HEAP8[i6 + 28 | 0] = 0;
 _memset(i6 + 8 | 0, 0, 13) | 0;
 i10 = HEAP32[i8 >> 2] | 0;
 i3 = i6 + 32 | 0;
 HEAP32[i3 >> 2] = 0;
 i12 = i6 + 36 | 0;
 HEAP32[i12 >> 2] = 0;
 HEAP32[i6 + 40 >> 2] = i13;
 do {
  if ((i10 | 0) == 0) {
   i15 = i13;
  } else {
   if (i10 >>> 0 > 536870911 >>> 0) {
    _WTFCrash();
   }
   i5 = __ZN3WTF18fastMallocGoodSizeEj(i10 << 3) | 0;
   HEAP32[i12 >> 2] = i5 >>> 3;
   i14 = __ZN3WTF10fastMallocEj(i5) | 0;
   i5 = i14;
   HEAP32[i3 >> 2] = i5;
   if ((i14 | 0) == 0) {
    i15 = i13;
    break;
   }
   i14 = i4 + (i13 << 3) | 0;
   if ((i13 | 0) == 0) {
    i15 = 0;
    break;
   } else {
    i16 = i4;
    i17 = i5;
   }
   while (1) {
    i5 = HEAP32[i16 >> 2] | 0;
    HEAP32[i17 >> 2] = i5;
    i11 = i5 | 0;
    HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
    i11 = HEAP32[i16 + 4 >> 2] | 0;
    HEAP32[i17 + 4 >> 2] = i11;
    if ((i11 | 0) != 0) {
     i5 = i11 | 0;
     HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 2;
    }
    i5 = i16 + 8 | 0;
    if ((i5 | 0) == (i14 | 0)) {
     break;
    } else {
     i16 = i5;
     i17 = i17 + 8 | 0;
    }
   }
   i15 = HEAP32[i9 >> 2] | 0;
  }
 } while (0);
 i17 = i1 + 136 | 0;
 __ZN7WebCore15HTMLTreeBuilder13constructTreeEPNS_15AtomicHTMLTokenE(HEAP32[i17 >> 2] | 0, i6);
 HEAP8[(HEAP32[i17 >> 2] | 0) + 148 | 0] = 0;
 __ZN7WebCore18HTMLDocumentParser29forcePlaintextForTextDocumentEv(i1 | 0);
 HEAP8[i1 + 476 | 0] = 1;
 __ZN7WebCore15AtomicHTMLTokenD2Ev(i6);
 i6 = HEAP32[i7 >> 2] | 0;
 if ((i15 | 0) != 0) {
  i1 = i6 + (i15 << 3) | 0;
  i15 = i6;
  while (1) {
   i17 = HEAP32[i15 + 4 >> 2] | 0;
   do {
    if ((i17 | 0) != 0) {
     i16 = i17 | 0;
     i4 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
     if ((i4 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i17);
      break;
     } else {
      HEAP32[i16 >> 2] = i4;
      break;
     }
    }
   } while (0);
   __ZN7WebCore13QualifiedNameD1Ev(i15 | 0);
   i15 = i15 + 8 | 0;
   if ((i15 | 0) == (i1 | 0)) {
    break;
   }
  }
  HEAP32[i9 >> 2] = 0;
 }
 if ((i6 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 HEAP32[i7 >> 2] = 0;
 HEAP32[i8 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i6);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore15AtomicHTMLTokenD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = i1 + 40 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 32 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 3) | 0;
  i3 = i5;
  while (1) {
   i5 = HEAP32[i3 + 4 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     i7 = i5 | 0;
     i8 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
     if ((i8 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i5);
      break;
     } else {
      HEAP32[i7 >> 2] = i8;
      break;
     }
    }
   } while (0);
   __ZN7WebCore13QualifiedNameD1Ev(i3 | 0);
   i3 = i3 + 8 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i1 + 36 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i4 = i2 + 24 | 0;
  if ((HEAP32[i4 >> 2] | 0) != 0) {
   HEAP32[i4 >> 2] = 0;
  }
  i4 = i2 + 16 | 0;
  i6 = HEAP32[i4 >> 2] | 0;
  if ((i6 | 0) != 0) {
   HEAP32[i4 >> 2] = 0;
   HEAP32[i2 + 20 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i6);
  }
  i6 = i2 + 12 | 0;
  if ((HEAP32[i6 >> 2] | 0) != 0) {
   HEAP32[i6 >> 2] = 0;
  }
  i6 = i2 + 4 | 0;
  i4 = HEAP32[i6 >> 2] | 0;
  if ((i4 | 0) != 0) {
   HEAP32[i6 >> 2] = 0;
   HEAP32[i2 + 8 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i4);
  }
  __ZdlPv(i2 | 0);
 }
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 | 0;
   i6 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i4 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i6 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i6;
  return;
 }
}
function runPostSets() {
 HEAP32[H_BASE + 64 >> 2] = F_BASE_vi + 34;
 HEAP32[H_BASE + 68 >> 2] = F_BASE_vi + 32;
 HEAP32[H_BASE + 72 >> 2] = F_BASE_ii + 10;
 HEAP32[H_BASE + 76 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 80 >> 2] = F_BASE_vii + 22;
 HEAP32[H_BASE + 84 >> 2] = F_BASE_viiii + 2;
 HEAP32[H_BASE + 88 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 92 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 96 >> 2] = F_BASE_vii + 14;
 HEAP32[H_BASE + 100 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 104 >> 2] = F_BASE_ii + 12;
 HEAP32[H_BASE + 108 >> 2] = F_BASE_vi + 28;
 HEAP32[H_BASE + 112 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 116 >> 2] = F_BASE_vi + 22;
 HEAP32[H_BASE + 120 >> 2] = F_BASE_vi + 18;
 HEAP32[H_BASE + 124 >> 2] = F_BASE_vi + 26;
 HEAP32[H_BASE + 128 >> 2] = F_BASE_vi + 30;
 HEAP32[H_BASE + 132 >> 2] = F_BASE_ii + 16;
 HEAP32[H_BASE + 136 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 140 >> 2] = F_BASE_vi + 20;
 HEAP32[H_BASE + 144 >> 2] = F_BASE_ii + 22;
 HEAP32[H_BASE + 148 >> 2] = F_BASE_vii + 12;
 HEAP32[H_BASE + 152 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 156 >> 2] = F_BASE_vii + 8;
 HEAP32[H_BASE + 160 >> 2] = F_BASE_ii + 14;
 HEAP32[H_BASE + 164 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 168 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 172 >> 2] = F_BASE_vii + 20;
 HEAP32[H_BASE + 184 >> 2] = F_BASE_vi + 16;
 HEAP32[H_BASE + 188 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 192 >> 2] = F_BASE_vii + 24;
 HEAP32[H_BASE + 196 >> 2] = F_BASE_vii + 10;
 HEAP32[H_BASE + 200 >> 2] = F_BASE_ii + 20;
 HEAP32[H_BASE + 204 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 208 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 220 >> 2] = F_BASE_vi + 14;
 HEAP32[H_BASE + 224 >> 2] = F_BASE_vi + 24;
 HEAP32[H_BASE + 228 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 232 >> 2] = F_BASE_vii + 16;
 HEAP32[H_BASE + 236 >> 2] = F_BASE_ii + 18;
}
function __ZN3WTF6VectorIN7WebCore9AttributeELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = i1 + 4 | 0;
 if ((HEAP32[i3 >> 2] | 0) >>> 0 >= i2 >>> 0) {
  return;
 }
 i4 = i1 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = i5 + (i6 << 3) | 0;
 if (i2 >>> 0 > 536870911 >>> 0) {
  _WTFCrash();
 }
 i7 = __ZN3WTF18fastMallocGoodSizeEj(i2 << 3) | 0;
 HEAP32[i3 >> 2] = i7 >>> 3;
 i2 = __ZN3WTF10fastMallocEj(i7) | 0;
 HEAP32[i4 >> 2] = i2;
 if ((i6 | 0) != 0) {
  i6 = i5;
  i7 = i2;
  while (1) {
   i2 = HEAP32[i6 >> 2] | 0;
   HEAP32[i7 >> 2] = i2;
   i8 = i2 | 0;
   HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
   i8 = i6 + 4 | 0;
   i2 = HEAP32[i8 >> 2] | 0;
   HEAP32[i7 + 4 >> 2] = i2;
   if ((i2 | 0) != 0) {
    i9 = i2 | 0;
    HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
   }
   i9 = HEAP32[i8 >> 2] | 0;
   do {
    if ((i9 | 0) != 0) {
     i8 = i9 | 0;
     i2 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
     if ((i2 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i9);
      break;
     } else {
      HEAP32[i8 >> 2] = i2;
      break;
     }
    }
   } while (0);
   __ZN7WebCore13QualifiedNameD1Ev(i6 | 0);
   i9 = i6 + 8 | 0;
   if ((i9 | 0) == (i1 | 0)) {
    break;
   } else {
    i6 = i9;
    i7 = i7 + 8 | 0;
   }
  }
 }
 if ((i5 | 0) == 0) {
  return;
 }
 if ((HEAP32[i4 >> 2] | 0) == (i5 | 0)) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i3 >> 2] = 0;
 }
 __ZN3WTF8fastFreeEPv(i5);
 return;
}
function __ZN7WebCore18TextDocumentParser6appendEN3WTF10PassRefPtrINS1_10StringImplEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 if ((HEAP8[i1 + 476 | 0] & 1) == 0) {
  __ZN7WebCore18TextDocumentParser20insertFakePreElementEv(i1);
 }
 i5 = i4 | 0;
 i6 = i2 | 0;
 i2 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 HEAP32[i5 >> 2] = i2;
 __ZN7WebCore18HTMLDocumentParser6appendEN3WTF10PassRefPtrINS1_10StringImplEEE(i1 | 0, i4);
 i4 = HEAP32[i5 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i5 = i4 | 0;
 i1 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i4);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i5 >> 2] = i1;
  STACKTOP = i3;
  return;
 }
}
function _memset(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i4 = i1 + i3 | 0;
 if ((i3 | 0) >= 20) {
  i2 = i2 & 255;
  i5 = i1 & 3;
  i6 = i2 | i2 << 8 | i2 << 16 | i2 << 24;
  i7 = i4 & ~3;
  if (i5) {
   i5 = i1 + 4 - i5 | 0;
   while ((i1 | 0) < (i5 | 0)) {
    HEAP8[i1] = i2;
    i1 = i1 + 1 | 0;
   }
  }
  while ((i1 | 0) < (i7 | 0)) {
   HEAP32[i1 >> 2] = i6;
   i1 = i1 + 4 | 0;
  }
 }
 while ((i1 | 0) < (i4 | 0)) {
  HEAP8[i1] = i2;
  i1 = i1 + 1 | 0;
 }
 return i1 - i3 | 0;
}
function _memcpy(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i4 = i1 | 0;
 if ((i1 & 3) == (i2 & 3)) {
  while (i1 & 3) {
   if ((i3 | 0) == 0) return i4 | 0;
   HEAP8[i1] = HEAP8[i2] | 0;
   i1 = i1 + 1 | 0;
   i2 = i2 + 1 | 0;
   i3 = i3 - 1 | 0;
  }
  while ((i3 | 0) >= 4) {
   HEAP32[i1 >> 2] = HEAP32[i2 >> 2];
   i1 = i1 + 4 | 0;
   i2 = i2 + 4 | 0;
   i3 = i3 - 4 | 0;
  }
 }
 while ((i3 | 0) > 0) {
  HEAP8[i1] = HEAP8[i2] | 0;
  i1 = i1 + 1 | 0;
  i2 = i2 + 1 | 0;
  i3 = i3 - 1 | 0;
 }
 return i4 | 0;
}
function copyTempDouble(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
 HEAP8[tempDoublePtr + 4 | 0] = HEAP8[i1 + 4 | 0];
 HEAP8[tempDoublePtr + 5 | 0] = HEAP8[i1 + 5 | 0];
 HEAP8[tempDoublePtr + 6 | 0] = HEAP8[i1 + 6 | 0];
 HEAP8[tempDoublePtr + 7 | 0] = HEAP8[i1 + 7 | 0];
}
function __ZThn28_NK7WebCore18HTMLDocumentParser17hasPreloadScannerEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 - 476 + 448 | 0;
 if ((HEAP32[i2 + 140 >> 2] | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 if ((HEAP8[i2 + 39 | 0] & 1) == 0) {
  i3 = 1;
  return i3 | 0;
 }
 i3 = (HEAP8[i2 + 468 | 0] & 1) != 0;
 return i3 | 0;
}
function __ZN7WebCore18TextDocumentParserC2ERNS_12HTMLDocumentE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore18HTMLDocumentParserC2ERNS_12HTMLDocumentE(i1 | 0, i2);
 HEAP32[i1 >> 2] = H_BASE + 64;
 HEAP32[i1 + 28 >> 2] = H_BASE + 184;
 HEAP32[i1 + 32 >> 2] = H_BASE + 220;
 HEAP8[i1 + 476 | 0] = 0;
 return;
}
function __ZN7WebCore18TextDocumentParserC1ERNS_12HTMLDocumentE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore18HTMLDocumentParserC2ERNS_12HTMLDocumentE(i1 | 0, i2);
 HEAP32[i1 >> 2] = H_BASE + 64;
 HEAP32[i1 + 28 >> 2] = H_BASE + 184;
 HEAP32[i1 + 32 >> 2] = H_BASE + 220;
 HEAP8[i1 + 476 | 0] = 0;
 return;
}
function viiii___ZN7WebCore25DecodedDataDocumentParser11appendBytesERNS_14DocumentWriterEPKcj__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN7WebCore25DecodedDataDocumentParser11appendBytesERNS_14DocumentWriterEPKcj(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
}
function __ZNK7WebCore18HTMLDocumentParser17hasPreloadScannerEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 if ((HEAP32[i1 + 140 >> 2] | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 if ((HEAP8[i1 + 39 | 0] & 1) == 0) {
  i2 = 1;
  return i2 | 0;
 }
 i2 = (HEAP8[i1 + 468 | 0] & 1) != 0;
 return i2 | 0;
}
function vii___ZThn28_N7WebCore18HTMLDocumentParser19stopWatchingForLoadEPNS_14CachedResourceE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZThn28_N7WebCore18HTMLDocumentParser19stopWatchingForLoadEPNS_14CachedResourceE(i1 | 0, i2 | 0);
}
function vii___ZThn32_N7WebCore18HTMLDocumentParser14notifyFinishedEPNS_14CachedResourceE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZThn32_N7WebCore18HTMLDocumentParser14notifyFinishedEPNS_14CachedResourceE(i1 | 0, i2 | 0);
}
function vi___ZThn28_N7WebCore18HTMLDocumentParser47appendCurrentInputStreamToPreloadScannerAndScanEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZThn28_N7WebCore18HTMLDocumentParser47appendCurrentInputStreamToPreloadScannerAndScanEv(i1 | 0);
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function vii___ZN7WebCore18HTMLDocumentParser19stopWatchingForLoadEPNS_14CachedResourceE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore18HTMLDocumentParser19stopWatchingForLoadEPNS_14CachedResourceE(i1 | 0, i2 | 0);
}
function vii___ZThn28_N7WebCore18HTMLDocumentParser12watchForLoadEPNS_14CachedResourceE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZThn28_N7WebCore18HTMLDocumentParser12watchForLoadEPNS_14CachedResourceE(i1 | 0, i2 | 0);
}
function vii___ZN7WebCore18HTMLDocumentParser14notifyFinishedEPNS_14CachedResourceE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore18HTMLDocumentParser14notifyFinishedEPNS_14CachedResourceE(i1 | 0, i2 | 0);
}
function vi___ZN7WebCore18HTMLDocumentParser47appendCurrentInputStreamToPreloadScannerAndScanEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore18HTMLDocumentParser47appendCurrentInputStreamToPreloadScannerAndScanEv(i1 | 0);
}
function vii___ZN7WebCore18HTMLDocumentParser12watchForLoadEPNS_14CachedResourceE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore18HTMLDocumentParser12watchForLoadEPNS_14CachedResourceE(i1 | 0, i2 | 0);
}
function vii___ZN7WebCore25DecodedDataDocumentParser5flushERNS_14DocumentWriterE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore25DecodedDataDocumentParser5flushERNS_14DocumentWriterE(i1 | 0, i2 | 0);
}
function vii___ZN7WebCore18HTMLDocumentParser6insertERKNS_15SegmentedStringE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore18HTMLDocumentParser6insertERKNS_15SegmentedStringE(i1 | 0, i2 | 0);
}
function vi___ZN7WebCore18HTMLDocumentParser35executeScriptsWaitingForStylesheetsEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore18HTMLDocumentParser35executeScriptsWaitingForStylesheetsEv(i1 | 0);
}
function __ZThn32_N7WebCore18TextDocumentParserD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 - 480 + 448 | 0;
 __ZN7WebCore18HTMLDocumentParserD2Ev(i2);
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZThn28_N7WebCore18TextDocumentParserD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 - 480 + 452 | 0;
 __ZN7WebCore18HTMLDocumentParserD2Ev(i2);
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function vii___ZNK7WebCore18HTMLDocumentParser12textPositionEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore18HTMLDocumentParser12textPositionEv(i1 | 0, i2 | 0);
}
function dynCall_viiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 FUNCTION_TABLE_viiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function ii___ZNK7WebCore18HTMLDocumentParser19isWaitingForScriptsEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore18HTMLDocumentParser19isWaitingForScriptsEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore18HTMLDocumentParser17isExecutingScriptEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore18HTMLDocumentParser17isExecutingScriptEv(i1 | 0) | 0;
}
function ii___ZN7WebCore18HTMLDocumentParser17hasInsertionPointEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore18HTMLDocumentParser17hasInsertionPointEv(i1 | 0) | 0;
}
function vi___ZN7WebCore18HTMLDocumentParser21suspendScheduledTasksEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore18HTMLDocumentParser21suspendScheduledTasksEv(i1 | 0);
}
function ii___ZNK7WebCore18HTMLDocumentParser14processingDataEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore18HTMLDocumentParser14processingDataEv(i1 | 0) | 0;
}
function vi___ZN7WebCore18HTMLDocumentParser20resumeScheduledTasksEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore18HTMLDocumentParser20resumeScheduledTasksEv(i1 | 0);
}
function vi___ZN7WebCore18HTMLDocumentParser20prepareToStopParsingEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore18HTMLDocumentParser20prepareToStopParsingEv(i1 | 0);
}
function __ZN7WebCore20CachedResourceClient34deprecatedDidReceiveCachedResourceEPNS_14CachedResourceE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZN7WebCore18TextDocumentParserD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore18HTMLDocumentParserD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function vi___ZN7WebCore18HTMLDocumentParser11stopParsingEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore18HTMLDocumentParser11stopParsingEv(i1 | 0);
}
function stackAlloc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + i1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 return i2 | 0;
}
function vi___ZN7WebCore14DocumentParser12startParsingEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore14DocumentParser12startParsingEv(i1 | 0);
}
function __ZThn32_N7WebCore18TextDocumentParserD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore18HTMLDocumentParserD2Ev(i1 - 480 + 448 | 0);
 return;
}
function __ZThn28_N7WebCore18TextDocumentParserD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore18HTMLDocumentParserD2Ev(i1 - 480 + 452 | 0);
 return;
}
function vi___ZN7WebCore18HTMLDocumentParser6finishEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore18HTMLDocumentParser6finishEv(i1 | 0);
}
function vi___ZN7WebCore18HTMLDocumentParser6detachEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore18HTMLDocumentParser6detachEv(i1 | 0);
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 1](i2 | 0, i3 | 0) | 0;
}
function _strlen(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1;
 while (HEAP8[i2] | 0) {
  i2 = i2 + 1 | 0;
 }
 return i2 - i1 | 0;
}
function setThrew(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 if ((__THREW__ | 0) == 0) {
  __THREW__ = i1;
  threwValue = i2;
 }
}
function dynCall_vii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 FUNCTION_TABLE_vii[i1 & 31](i2 | 0, i3 | 0);
}
function __ZN7WebCore18TextDocumentParserD2Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore18HTMLDocumentParserD2Ev(i1 | 0);
 return;
}
function __ZN7WebCore18TextDocumentParserD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore18HTMLDocumentParserD2Ev(i1 | 0);
 return;
}
function __ZN7WebCore24ScriptableDocumentParser26asScriptableDocumentParserEv(i1) {
 i1 = i1 | 0;
 return i1 | 0;
}
function __ZThn28_N7WebCore18HTMLDocumentParser11inputStreamEv(i1) {
 i1 = i1 | 0;
 return i1 - 476 + 492 | 0;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 31](i2 | 0) | 0;
}
function __ZNK7WebCore20CachedResourceClient18resourceClientTypeEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore18HTMLDocumentParser11inputStreamEv(i1) {
 i1 = i1 | 0;
 return i1 + 44 | 0;
}
function b5(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(5);
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 63](i2 | 0);
}
function __ZNK7WebCore25DecodedDataDocumentParser10wellFormedEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZN7WebCore14DocumentParser15pinToMainThreadEv(i1) {
 i1 = i1 | 0;
 return;
}
function b4(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(4);
 return 0;
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 1]();
}
function b1(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(1);
}
function stackRestore(i1) {
 i1 = i1 | 0;
 STACKTOP = i1;
}
function setTempRet9(i1) {
 i1 = i1 | 0;
 tempRet9 = i1;
}
function setTempRet8(i1) {
 i1 = i1 | 0;
 tempRet8 = i1;
}
function setTempRet7(i1) {
 i1 = i1 | 0;
 tempRet7 = i1;
}
function setTempRet6(i1) {
 i1 = i1 | 0;
 tempRet6 = i1;
}
function setTempRet5(i1) {
 i1 = i1 | 0;
 tempRet5 = i1;
}
function setTempRet4(i1) {
 i1 = i1 | 0;
 tempRet4 = i1;
}
function setTempRet3(i1) {
 i1 = i1 | 0;
 tempRet3 = i1;
}
function setTempRet2(i1) {
 i1 = i1 | 0;
 tempRet2 = i1;
}
function setTempRet1(i1) {
 i1 = i1 | 0;
 tempRet1 = i1;
}
function setTempRet0(i1) {
 i1 = i1 | 0;
 tempRet0 = i1;
}
function b2(i1) {
 i1 = i1 | 0;
 abort(2);
 return 0;
}
function stackSave() {
 return STACKTOP | 0;
}
function b0(i1) {
 i1 = i1 | 0;
 abort(0);
}
function b3() {
 abort(3);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_vi = [b0,b0,vi___ZN7WebCore18HTMLDocumentParser6finishEv__wrapper,b0,vi___ZN7WebCore18HTMLDocumentParser47appendCurrentInputStreamToPreloadScannerAndScanEv__wrapper,b0,vi___ZThn28_N7WebCore18HTMLDocumentParser47appendCurrentInputStreamToPreloadScannerAndScanEv__wrapper,b0,vi___ZN7WebCore18HTMLDocumentParser20prepareToStopParsingEv__wrapper,b0,__ZN7WebCore14DocumentParser15pinToMainThreadEv,b0,__ZThn28_N7WebCore18TextDocumentParserD0Ev,b0,__ZThn32_N7WebCore18TextDocumentParserD1Ev,b0,__ZThn28_N7WebCore18TextDocumentParserD1Ev,b0,vi___ZN7WebCore18HTMLDocumentParser6detachEv__wrapper,b0,vi___ZN7WebCore18HTMLDocumentParser35executeScriptsWaitingForStylesheetsEv__wrapper,b0,vi___ZN7WebCore18HTMLDocumentParser11stopParsingEv__wrapper,b0,__ZThn32_N7WebCore18TextDocumentParserD0Ev,b0,vi___ZN7WebCore18HTMLDocumentParser21suspendScheduledTasksEv__wrapper,b0,vi___ZN7WebCore14DocumentParser12startParsingEv__wrapper
  ,b0,vi___ZN7WebCore18HTMLDocumentParser20resumeScheduledTasksEv__wrapper,b0,__ZN7WebCore18TextDocumentParserD0Ev,b0,__ZN7WebCore18TextDocumentParserD2Ev,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0
  ,b0,b0,b0,b0,b0];
  var FUNCTION_TABLE_vii = [b1,b1,vii___ZN7WebCore25DecodedDataDocumentParser5flushERNS_14DocumentWriterE__wrapper,b1,vii___ZN7WebCore18HTMLDocumentParser12watchForLoadEPNS_14CachedResourceE__wrapper,b1,vii___ZThn32_N7WebCore18HTMLDocumentParser14notifyFinishedEPNS_14CachedResourceE__wrapper,b1,vii___ZN7WebCore18HTMLDocumentParser19stopWatchingForLoadEPNS_14CachedResourceE__wrapper,b1,vii___ZThn28_N7WebCore18HTMLDocumentParser19stopWatchingForLoadEPNS_14CachedResourceE__wrapper,b1,vii___ZNK7WebCore18HTMLDocumentParser12textPositionEv__wrapper,b1,__ZN7WebCore18TextDocumentParser6appendEN3WTF10PassRefPtrINS1_10StringImplEEE,b1,__ZN7WebCore20CachedResourceClient34deprecatedDidReceiveCachedResourceEPNS_14CachedResourceE,b1,__ZN7WebCore18TextDocumentParserC2ERNS_12HTMLDocumentE,b1,vii___ZN7WebCore18HTMLDocumentParser14notifyFinishedEPNS_14CachedResourceE__wrapper,b1,vii___ZN7WebCore18HTMLDocumentParser6insertERKNS_15SegmentedStringE__wrapper,b1,vii___ZThn28_N7WebCore18HTMLDocumentParser12watchForLoadEPNS_14CachedResourceE__wrapper,b1,b1,b1,b1
  ,b1,b1,b1];
  var FUNCTION_TABLE_ii = [b2,b2,ii___ZNK7WebCore18HTMLDocumentParser17isExecutingScriptEv__wrapper,b2,__ZNK7WebCore18HTMLDocumentParser17hasPreloadScannerEv,b2,ii___ZN7WebCore18HTMLDocumentParser17hasInsertionPointEv__wrapper,b2,__ZThn28_NK7WebCore18HTMLDocumentParser17hasPreloadScannerEv,b2,__ZN7WebCore24ScriptableDocumentParser26asScriptableDocumentParserEv,b2,ii___ZNK7WebCore18HTMLDocumentParser14processingDataEv__wrapper,b2,__ZN7WebCore18HTMLDocumentParser11inputStreamEv,b2,__ZNK7WebCore25DecodedDataDocumentParser10wellFormedEv,b2,__ZNK7WebCore20CachedResourceClient18resourceClientTypeEv,b2,__ZThn28_N7WebCore18HTMLDocumentParser11inputStreamEv,b2,ii___ZNK7WebCore18HTMLDocumentParser19isWaitingForScriptsEv__wrapper,b2,b2,b2,b2,b2,b2
  ,b2,b2,b2];
  var FUNCTION_TABLE_v = [b3,b3];
  var FUNCTION_TABLE_iii = [b4,b4];
  var FUNCTION_TABLE_viiii = [b5,b5,viiii___ZN7WebCore25DecodedDataDocumentParser11appendBytesERNS_14DocumentWriterEPKcj__wrapper,b5];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_viiii": invoke_viiii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore9HTMLNames6preTagE": __ZN7WebCore9HTMLNames6preTagE, "__ZN7WebCore9HTMLNames9styleAttrE": __ZN7WebCore9HTMLNames9styleAttrE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_iii = Module["dynCall_iii"] = asm["dynCall_iii"];
var dynCall_viiii = Module["dynCall_viiii"] = asm["dynCall_viiii"];
// Warning: printing of i64 values may be slightly rounded! No deep i64 math used, so precise i64 code not included
var i64Math = null;
// === Auto-generated postamble setup entry stuff ===
function run(args) {
  initRuntime();
}
Module['run'] = run;
// {{PRE_RUN_ADDITIONS}}
run();
// {{POST_RUN_ADDITIONS}}
  // {{MODULE_ADDITIONS}}
  return Module;
});
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZNK7WebCore25DecodedDataDocumentParser10wellFormedEv","__ZN7WebCore18TextDocumentParser20insertFakePreElementEv","__ZN7WebCore15AtomicHTMLTokenD2Ev","__ZNK7WebCore18HTMLDocumentParser17hasPreloadScannerEv","__ZN7WebCore18TextDocumentParserC2ERNS_12HTMLDocumentE","__ZThn28_N7WebCore18TextDocumentParserD1Ev","__ZN7WebCore14DocumentParser15pinToMainThreadEv","_memset","__ZThn28_N7WebCore18TextDocumentParserD0Ev","__ZThn28_NK7WebCore18HTMLDocumentParser17hasPreloadScannerEv","__ZThn32_N7WebCore18TextDocumentParserD1Ev","_memcpy","__ZN7WebCore24ScriptableDocumentParser26asScriptableDocumentParserEv","__ZN7WebCore18HTMLDocumentParser11inputStreamEv","__ZThn32_N7WebCore18TextDocumentParserD0Ev","__ZNK7WebCore20CachedResourceClient18resourceClientTypeEv","__ZN7WebCore18TextDocumentParser6appendEN3WTF10PassRefPtrINS1_10StringImplEEE","__ZN7WebCore18TextDocumentParserD0Ev","__ZThn28_N7WebCore18HTMLDocumentParser11inputStreamEv","__ZN7WebCore18TextDocumentParserD2Ev","__ZN7WebCore20CachedResourceClient34deprecatedDidReceiveCachedResourceEPNS_14CachedResourceE","__ZN3WTF6VectorIN7WebCore9AttributeELj0ENS_15CrashOnOverflowEE15reserveCapacityEj"]
