#include<stdio.h>
#include<conio.h>
int a[20][20], vis[20], n;
void dfs(int v) {
    int i;
    vis[v] = 1;
    for (i = 1; i <= n; i++)
        if (a[v][i] && !vis[i]) {
            printf("\n %d->%d", v, i);
            dfs(i);
        }
}
int main(int argc, char **argv) {
    int i, j, count = 0;
    printf("\n Enter number of vertices:");
    scanf("%d", &n);
    for (i = 1; i <= n; i++) {
        vis[i] = 0;
        for (j = 1; j <= n; j++)
            a[i][j] = 0;
    }
    printf("\n Enter the adjacency matrix:\n");
    for (i = 1; i <= n; i++)
        for (j = 1; j <= n; j++)
            scanf("%d", &a[i][j]);
    dfs(1);
    printf("\n");
    for (i = 1; i <= n; i++) {
        if (vis[i])
            count++;
    }
    if (count == n)
        printf("\n Graph is connected");
    else
        printf("\n Graph is not connected");
    return 0;
}