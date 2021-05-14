// Build: clang beep.m -framework AppKit -o beep
#import <Foundation/Foundation.h>
#import <AppKit/AppKit.h>

int main(int argc, const char * argv[]) {
  @autoreleasepool {
    NSBeep();
    sleep(1);
  }

  return 0;
}