#ifndef moonglow_debug_h
#define moonglow_debug_h

#include "chunk.h"

void disassembleChunk(Chunk* chunk, const char* name);
static int simpleInstruction(const char* name, int offset);
int disassembleInstruction(Chunk* chunk, int offset);

#endif