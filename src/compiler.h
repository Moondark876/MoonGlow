#ifndef moonglow_compiler_h
#define moonglow_compiler_h

#include "vm.h"

ObjFunction* compile(const char* source);
void markCompilerRoots();

#endif