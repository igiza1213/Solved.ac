#include <stdio.h>
int main() {
    int T, a, b, i, sum=1;
    scanf("%d", &T);
    for(i=0;i<T;i++) {
        scanf("%d %d", &a, &b);
        sum=a;
        for(;b>1;b--) {
            sum*=a;
            sum%=10;
        }
        sum%=10;
        printf("%d\n", sum?sum:10);
    }
}