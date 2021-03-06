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
H_BASE = parentModule["_malloc"](216 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 216;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore15SecurityContextC1Ev;
var __ZN7WebCore15SecurityContextD1Ev;
/* memory initializer */ allocate([32,105,115,32,97,110,32,105,110,118,97,108,105,100,32,115,97,110,100,98,111,120,32,102,108,97,103,46,0,0,0,0,32,97,114,101,32,105,110,118,97,108,105,100,32,115,97,110,100,98,111,120,32,102,108,97,103,115,46,0,0,0,0,0,44,32,39,0,0,0,0,0,97,108,108,111,119,45,112,111,105,110,116,101,114,45,108,111,99,107,0,0,0,0,0,0,97,108,108,111,119,45,112,111,112,117,112,115,0,0,0,0,97,108,108,111,119,45,116,111,112,45,110,97,118,105,103,97,116,105,111,110,0,0,0,0,97,108,108,111,119,45,115,99,114,105,112,116,115,0,0,0,97,108,108,111,119,45,102,111,114,109,115,0,0,0,0,0,97,108,108,111,119,45,115,97,109,101,45,111,114,105,103,105,110,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
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
function invoke_vi(index,a1) {
  try {
    Module["dynCall_vi"](index,a1);
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
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN7WebCore15SecurityContextE=(H_BASE+200)|0;
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
  var invoke_ii=env.invoke_ii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var invoke_vi=env.invoke_vi;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore15SecurityContext18parseSandboxPolicyERKN3WTF6StringERS2_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 40 | 0;
 i8 = i1 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = 0;
 } else {
  i10 = HEAP32[i9 + 4 >> 2] | 0;
 }
 i11 = i6 | 0;
 HEAP32[i11 >> 2] = 0;
 i12 = i6 + 4 | 0;
 HEAP32[i12 >> 2] = 0;
 i13 = i6 + 8 | 0;
 HEAP32[i13 >> 2] = 0;
 i14 = i6 + 12 | 0;
 HEAP8[i14] = 1;
 HEAP32[i6 + 16 >> 2] = 0;
 i15 = i6 + 20 | 0;
 HEAP32[i15 >> 2] = 0;
 do {
  if ((i10 | 0) == 0) {
   i16 = -1;
  } else {
   i17 = i7 | 0;
   i18 = i6 + 20 | 0;
   i19 = 0;
   i20 = 0;
   i21 = -1;
   i22 = i9;
   L6 : while (1) {
    i23 = (i22 | 0) == 0;
    i24 = i22 + 4 | 0;
    i25 = i22 + 16 | 0;
    i26 = i22 + 8 | 0;
    i27 = i26;
    i28 = i26 | 0;
    L8 : do {
     if (i23) {
      i29 = i19;
     } else {
      i26 = i19;
      while (1) {
       if ((HEAP32[i24 >> 2] | 0) >>> 0 <= i26 >>> 0) {
        i29 = i26;
        break L8;
       }
       if ((HEAP32[i25 >> 2] & 32 | 0) == 0) {
        i30 = HEAP16[(HEAP32[i27 >> 2] | 0) + (i26 << 1) >> 1] | 0;
       } else {
        i30 = HEAPU8[(HEAP32[i28 >> 2] | 0) + i26 | 0] | 0;
       }
       if ((i30 & 65535) >>> 0 >= 33 >>> 0) {
        i29 = i26;
        break L8;
       }
       switch (i30 << 16 >> 16) {
       case 32:
       case 10:
       case 9:
       case 13:
       case 12:
        {
         break;
        }
       default:
        {
         i29 = i26;
         break L8;
        }
       }
       i31 = i26 + 1 | 0;
       if (i31 >>> 0 < i10 >>> 0) {
        i26 = i31;
       } else {
        i32 = i20;
        i33 = i21;
        break L6;
       }
      }
     }
    } while (0);
    i26 = i29 + 1 | 0;
    L19 : do {
     if (i26 >>> 0 < i10 >>> 0) {
      if (i23) {
       i31 = i26;
       while (1) {
        i34 = i31 + 1 | 0;
        if (i34 >>> 0 < i10 >>> 0) {
         i31 = i34;
        } else {
         i35 = i31;
         i36 = i34;
         break L19;
        }
       }
      } else {
       i37 = i29;
       i38 = i26;
      }
      while (1) {
       do {
        if ((HEAP32[i24 >> 2] | 0) >>> 0 > i38 >>> 0) {
         if ((HEAP32[i25 >> 2] & 32 | 0) == 0) {
          i39 = HEAP16[(HEAP32[i27 >> 2] | 0) + (i38 << 1) >> 1] | 0;
         } else {
          i39 = HEAPU8[(HEAP32[i28 >> 2] | 0) + i38 | 0] | 0;
         }
         if ((i39 & 65535) >>> 0 >= 33 >>> 0) {
          break;
         }
         switch (i39 << 16 >> 16) {
         case 32:
         case 10:
         case 9:
         case 13:
         case 12:
          {
           i35 = i37;
           i36 = i38;
           break L19;
           break;
          }
         default:
          {}
         }
        }
       } while (0);
       i31 = i38 + 1 | 0;
       if (i31 >>> 0 < i10 >>> 0) {
        i37 = i38;
        i38 = i31;
       } else {
        i35 = i38;
        i36 = i31;
        break;
       }
      }
     } else {
      i35 = i29;
      i36 = i26;
     }
    } while (0);
    __ZNK3WTF6String9substringEjj(i7, i1, i29, i36 - i29 | 0);
    do {
     if (__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(HEAP32[i17 >> 2] | 0, H_BASE + 176 | 0) | 0) {
      i40 = i21 & -5;
      i41 = i20;
     } else {
      if (__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(HEAP32[i17 >> 2] | 0, H_BASE + 160 | 0) | 0) {
       i40 = i21 & -9;
       i41 = i20;
       break;
      }
      if (__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(HEAP32[i17 >> 2] | 0, H_BASE + 144 | 0) | 0) {
       i40 = i21 & -145;
       i41 = i20;
       break;
      }
      if (__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(HEAP32[i17 >> 2] | 0, H_BASE + 120 | 0) | 0) {
       i40 = i21 & -33;
       i41 = i20;
       break;
      }
      if (__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(HEAP32[i17 >> 2] | 0, H_BASE + 104 | 0) | 0) {
       i40 = i21 & -65;
       i41 = i20;
       break;
      }
      if (__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(HEAP32[i17 >> 2] | 0, H_BASE + 80 | 0) | 0) {
       i40 = i21 & -513;
       i41 = i20;
       break;
      }
      L53 : do {
       if ((i20 | 0) == 0) {
        HEAP8[i5] = 39;
        i26 = HEAP32[i13 >> 2] | 0;
        do {
         if ((i26 | 0) != 0) {
          i28 = HEAP32[i11 >> 2] | 0;
          if (i28 >>> 0 >= (HEAP32[i26 + 4 >> 2] | 0) >>> 0) {
           break;
          }
          if ((HEAP32[i12 >> 2] | 0) != 0) {
           break;
          }
          i27 = (HEAP8[i14] & 1) == 0;
          HEAP32[i11 >> 2] = i28 + 1;
          if (i27) {
           HEAP16[(HEAP32[i18 >> 2] | 0) + (i28 << 1) >> 1] = 39;
           break L53;
          } else {
           HEAP8[(HEAP32[i15 >> 2] | 0) + i28 | 0] = 39;
           break L53;
          }
         }
        } while (0);
        __ZN3WTF13StringBuilder6appendEPKhj(i6, i5, 1);
       } else {
        __ZN3WTF13StringBuilder6appendEPKhj(i6, H_BASE + 72 | 0, 3);
       }
      } while (0);
      __ZN3WTF13StringBuilder6appendERKNS_6StringE(i6, i7);
      HEAP8[i4] = 39;
      i26 = HEAP32[i13 >> 2] | 0;
      do {
       if ((i26 | 0) == 0) {
        i42 = 50;
       } else {
        i28 = HEAP32[i11 >> 2] | 0;
        if (i28 >>> 0 >= (HEAP32[i26 + 4 >> 2] | 0) >>> 0) {
         i42 = 50;
         break;
        }
        if ((HEAP32[i12 >> 2] | 0) != 0) {
         i42 = 50;
         break;
        }
        i27 = (HEAP8[i14] & 1) == 0;
        HEAP32[i11 >> 2] = i28 + 1;
        if (i27) {
         HEAP16[(HEAP32[i18 >> 2] | 0) + (i28 << 1) >> 1] = 39;
         break;
        } else {
         HEAP8[(HEAP32[i15 >> 2] | 0) + i28 | 0] = 39;
         break;
        }
       }
      } while (0);
      if ((i42 | 0) == 50) {
       i42 = 0;
       __ZN3WTF13StringBuilder6appendEPKhj(i6, i4, 1);
      }
      i40 = i21;
      i41 = i20 + 1 | 0;
     }
    } while (0);
    i26 = i35 + 2 | 0;
    i28 = HEAP32[i17 >> 2] | 0;
    do {
     if ((i28 | 0) != 0) {
      i27 = i28 | 0;
      i25 = (HEAP32[i27 >> 2] | 0) - 2 | 0;
      if ((i25 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i28);
       break;
      } else {
       HEAP32[i27 >> 2] = i25;
       break;
      }
     }
    } while (0);
    if (i26 >>> 0 >= i10 >>> 0) {
     i32 = i41;
     i33 = i40;
     break;
    }
    i19 = i26;
    i20 = i41;
    i21 = i40;
    i22 = HEAP32[i8 >> 2] | 0;
   }
   if ((i32 | 0) == 0) {
    i16 = i33;
    break;
   }
   if (i32 >>> 0 > 1 >>> 0) {
    __ZN3WTF13StringBuilder6appendEPKhj(i6, H_BASE + 40 | 0, 27);
   } else {
    __ZN3WTF13StringBuilder6appendEPKhj(i6, H_BASE + 8 | 0, 28);
   }
   __ZN3WTF13StringBuilder11shrinkToFitEv(i6);
   i22 = HEAP32[i12 >> 2] | 0;
   if ((i22 | 0) == 0) {
    __ZNK3WTF13StringBuilder11reifyStringEv(i6);
    i21 = HEAP32[i12 >> 2] | 0;
    if ((i21 | 0) == 0) {
     i43 = 0;
    } else {
     i44 = i21;
     i42 = 64;
    }
   } else {
    i44 = i22;
    i42 = 64;
   }
   if ((i42 | 0) == 64) {
    i22 = i44 | 0;
    HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) + 2;
    i43 = i44;
   }
   i22 = i2 | 0;
   i21 = HEAP32[i22 >> 2] | 0;
   HEAP32[i22 >> 2] = i43;
   if ((i21 | 0) == 0) {
    i16 = i33;
    break;
   }
   i22 = i21 | 0;
   i20 = (HEAP32[i22 >> 2] | 0) - 2 | 0;
   if ((i20 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i21);
    i16 = i33;
    break;
   } else {
    HEAP32[i22 >> 2] = i20;
    i16 = i33;
    break;
   }
  }
 } while (0);
 i33 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i33 | 0) != 0) {
   i13 = i33 | 0;
   i43 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
   if ((i43 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i33);
    break;
   } else {
    HEAP32[i13 >> 2] = i43;
    break;
   }
  }
 } while (0);
 i33 = HEAP32[i12 >> 2] | 0;
 if ((i33 | 0) == 0) {
  STACKTOP = i3;
  return i16 | 0;
 }
 i12 = i33 | 0;
 i43 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
 if ((i43 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i33);
  STACKTOP = i3;
  return i16 | 0;
 } else {
  HEAP32[i12 >> 2] = i43;
  STACKTOP = i3;
  return i16 | 0;
 }
 return 0;
}
function __ZN3WTF13StringBuilder6appendERKNS_6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = i2 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i4 = HEAP32[i2 + 4 >> 2] | 0;
 if ((i4 | 0) == 0) {
  return;
 }
 i5 = i1 | 0;
 do {
  if ((HEAP32[i5 >> 2] | 0) == 0) {
   if ((HEAP32[i1 + 8 >> 2] | 0) != 0) {
    break;
   }
   i6 = i2 | 0;
   HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
   i6 = i1 + 4 | 0;
   i7 = HEAP32[i6 >> 2] | 0;
   HEAP32[i6 >> 2] = i2;
   do {
    if ((i7 | 0) != 0) {
     i8 = i7 | 0;
     i9 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
     if ((i9 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i7);
      break;
     } else {
      HEAP32[i8 >> 2] = i9;
      break;
     }
    }
   } while (0);
   i7 = HEAP32[i3 >> 2] | 0;
   if ((i7 | 0) == 0) {
    i10 = 0;
   } else {
    i10 = HEAP32[i7 + 4 >> 2] | 0;
   }
   HEAP32[i5 >> 2] = i10;
   HEAP8[i1 + 12 | 0] = (HEAP32[(HEAP32[i6 >> 2] | 0) + 16 >> 2] | 0) >>> 5 & 1;
   return;
  }
 } while (0);
 if ((HEAP32[i2 + 16 >> 2] & 32 | 0) == 0) {
  __ZN3WTF13StringBuilder6appendEPKtj(i1, HEAP32[i2 + 8 >> 2] | 0, i4);
  return;
 } else {
  __ZN3WTF13StringBuilder6appendEPKhj(i1, HEAP32[i2 + 8 >> 2] | 0, i4);
  return;
 }
}
function __ZN7WebCore15SecurityContext19enforceSandboxFlagsEi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 8 | 0;
 i6 = HEAP32[i5 >> 2] | i2;
 HEAP32[i5 >> 2] = i6;
 if ((i6 & 4 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i6 = i1 + 12 | 0;
 i5 = HEAP32[i6 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP8[i5 + 22 | 0] & 1) != 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore14SecurityOrigin12createUniqueEv(i4);
 i5 = i4 | 0;
 i4 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 i2 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = i4;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 | 0;
   if (((tempValue = HEAP32[i4 >> 2] | 0, HEAP32[i4 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
    break;
   }
   __ZN7WebCore14SecurityOriginD2Ev(i2);
   __ZN3WTF8fastFreeEPv(i2);
  }
 } while (0);
 HEAP8[i1 + 5 | 0] = 1;
 i1 = HEAP32[i5 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i5 = i1 | 0;
 if (((tempValue = HEAP32[i5 >> 2] | 0, HEAP32[i5 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore14SecurityOriginD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore14SecurityOriginD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = HEAP32[i1 + 16 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 | 0;
   i3 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i4 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i4 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i4 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i4;
  return;
 }
}
function __ZNK7WebCore15SecurityContext20isSecureTransitionToERKNS_3URLE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 if ((HEAP8[i1 + 5 | 0] & 1) == 0) {
  i5 = 1;
  STACKTOP = i3;
  return i5 | 0;
 }
 __ZN7WebCore14SecurityOrigin6createERKNS_3URLE(i4, i2);
 i2 = i4 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 i2 = __ZNK7WebCore14SecurityOrigin9canAccessEPKS0_(HEAP32[i1 + 12 >> 2] | 0, i4) | 0;
 if ((i4 | 0) == 0) {
  i5 = i2;
  STACKTOP = i3;
  return i5 | 0;
 }
 i1 = i4 | 0;
 if (((tempValue = HEAP32[i1 >> 2] | 0, HEAP32[i1 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
  i5 = i2;
  STACKTOP = i3;
  return i5 | 0;
 }
 __ZN7WebCore14SecurityOriginD2Ev(i4);
 __ZN3WTF8fastFreeEPv(i4);
 i5 = i2;
 STACKTOP = i3;
 return i5 | 0;
}
function __ZN7WebCore15SecurityContextD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 208;
 i2 = HEAP32[i1 + 16 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN7WebCore21ContentSecurityPolicyD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 i4 = i2 | 0;
 if (((tempValue = HEAP32[i4 >> 2] | 0, HEAP32[i4 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 __ZN7WebCore14SecurityOriginD2Ev(i2);
 __ZN3WTF8fastFreeEPv(i2);
 i3 = i1;
 __ZdlPv(i3);
 return;
}
function __ZN7WebCore15SecurityContext17setSecurityOriginEN3WTF10PassRefPtrINS_14SecurityOriginEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = i2 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 i3 = i1 + 12 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i2;
 do {
  if ((i4 | 0) != 0) {
   i2 = i4 | 0;
   if (((tempValue = HEAP32[i2 >> 2] | 0, HEAP32[i2 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
    break;
   }
   __ZN7WebCore14SecurityOriginD2Ev(i4);
   __ZN3WTF8fastFreeEPv(i4);
  }
 } while (0);
 HEAP8[i1 + 5 | 0] = 1;
 return;
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
function __ZN7WebCore15SecurityContextD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 HEAP32[i1 >> 2] = H_BASE + 208;
 i2 = HEAP32[i1 + 16 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN7WebCore21ContentSecurityPolicyD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 if (((tempValue = HEAP32[i1 >> 2] | 0, HEAP32[i1 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
  return;
 }
 __ZN7WebCore14SecurityOriginD2Ev(i2);
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN7WebCore15SecurityContextD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 HEAP32[i1 >> 2] = H_BASE + 208;
 i2 = HEAP32[i1 + 16 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN7WebCore21ContentSecurityPolicyD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 if (((tempValue = HEAP32[i1 >> 2] | 0, HEAP32[i1 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
  return;
 }
 __ZN7WebCore14SecurityOriginD2Ev(i2);
 __ZN3WTF8fastFreeEPv(i2);
 return;
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
function __ZN7WebCore15SecurityContext24setContentSecurityPolicyEN3WTF10PassOwnPtrINS_21ContentSecurityPolicyEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = i1 + 16 | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 i4 = i2 | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 HEAP32[i3 >> 2] = i2;
 if ((i1 | 0) == 0) {
  return;
 }
 __ZN7WebCore21ContentSecurityPolicyD1Ev(i1);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore15SecurityContextC2Ev(i1) {
 i1 = i1 | 0;
 HEAP32[i1 >> 2] = H_BASE + 208;
 HEAP8[i1 + 4 | 0] = 0;
 HEAP8[i1 + 5 | 0] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 HEAP32[i1 + 12 >> 2] = 0;
 HEAP32[i1 + 16 >> 2] = 0;
 return;
}
function __ZN7WebCore15SecurityContextC1Ev(i1) {
 i1 = i1 | 0;
 HEAP32[i1 >> 2] = H_BASE + 208;
 HEAP8[i1 + 4 | 0] = 0;
 HEAP8[i1 + 5 | 0] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 HEAP32[i1 + 12 >> 2] = 0;
 HEAP32[i1 + 16 >> 2] = 0;
 return;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function stackAlloc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + i1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 return i2 | 0;
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
function runPostSets() {
 HEAP32[H_BASE + 208 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 212 >> 2] = F_BASE_vi + 6;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 1](i2 | 0) | 0;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 7](i2 | 0);
}
function b2(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(2);
 return 0;
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 1]();
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
function b0(i1) {
 i1 = i1 | 0;
 abort(0);
 return 0;
}
function stackSave() {
 return STACKTOP | 0;
}
function b3(i1) {
 i1 = i1 | 0;
 abort(3);
}
function b1() {
 abort(1);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_ii = [b0,b0];
  var FUNCTION_TABLE_v = [b1,b1];
  var FUNCTION_TABLE_iii = [b2,b2];
  var FUNCTION_TABLE_vi = [b3,b3,__ZN7WebCore15SecurityContextC2Ev,b3,__ZN7WebCore15SecurityContextD2Ev,b3,__ZN7WebCore15SecurityContextD0Ev,b3];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii, dynCall_vi: dynCall_vi };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_vi": invoke_vi, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_iii = Module["dynCall_iii"] = asm["dynCall_iii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZN7WebCore15SecurityContext19enforceSandboxFlagsEi","__ZN3WTF13StringBuilder6appendERKNS_6StringE","__ZN7WebCore15SecurityContext24setContentSecurityPolicyEN3WTF10PassOwnPtrINS_21ContentSecurityPolicyEEE","__ZNK7WebCore15SecurityContext20isSecureTransitionToERKNS_3URLE","__ZN7WebCore15SecurityContextD0Ev","_memset","__ZN7WebCore15SecurityContext17setSecurityOriginEN3WTF10PassRefPtrINS_14SecurityOriginEEE","__ZN7WebCore15SecurityContext18parseSandboxPolicyERKN3WTF6StringERS2_","__ZN7WebCore15SecurityContextC2Ev","__ZN7WebCore15SecurityContextD2Ev","__ZN7WebCore14SecurityOriginD2Ev","_memcpy"]
