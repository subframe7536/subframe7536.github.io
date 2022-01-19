# TODOlist
###### sg函数
###### 背包
###### 最短路
###### 二叉搜索树
###### lcaL
###### 贪心
###### 染色问题
###### 最大流理解
# 算法
#### 素数筛
```c++
const int N = 100;
bool isprime[N];
int primes[N];
void judgeprime() {
	int temp;
	memset(isprime, 1, sizeof(isprime));
	int cnt = 0;
	isprime[1] = 0;
	for (int i = 2; i < N; i++) {
		if (isprime[i] == 1)
			primes[cnt++] = i;
		for (int j = 0; j < cnt && (temp = i * primes[j]) < N; j++) { //找i之前的所有质数
			isprime[temp] = 0;
			if (i % primes[j] == 0)//每次整除一个最小的质数将会跳出循环，所以每个数字，只会被最小的质数筛一次
				break;
		}
	}
}
//最快
```

```c++
const int N = 1e6 + 11;
int prime[N];
void init() {
	memset(prime, 0, sizeof prime);
	for (int i = 2; i <= N; i++) 
		if (!prime[i]) 
			for (int j = i + i; j <= maxx; j += i)
				prime[j] = 1;
	return;
}
//0为素数,1非素数
```
#### 最大公约数
最大公因数和最小公倍数的乘积等于两个原数的乘积。
```c++
int gcd(int x, int y) {
	return y ? gcd(y, x % y) : x;
}
ll gcd(ll a, ll b) {
	while (b != 0) {
		ll c = a % b; 
		a = b; 
		b = c;
	}
	return a < 0 ? -a : a;
}
//最小公倍数：a * b / gcd(a, b)
```
#### 马拉车算法（回文串）
```c++
#include<cstdio>
#include<cstring>
#include<algorithm>
using namespace std;

const int N = 2e5 + 11;
int p[N];
char str[N];
char s[N];
int Manacher() {
	int x = 0, len = strlen(s);
	str[0] = '$';//防止越界
	for (int i = 0; i < len; i++) {
		str[++x] = '#';
		str[++x] = s[i];
	}
	str[++x] = '#', str[++x] = '@';//最后再加一个@
	int index = 0, end = 0, center = 0;
	int maxx = -1;
	for (int i = 0; i < x; i++) {
		p[i] = i < end ? min(p[2 * center - i], end - i) : 1;//
		while (str[i - p[i]] == str[i + p[i]])
			p[i]++;
		if (i + p[i] > end) {
			end = i + p[i];
			center = i;
		}
		if (maxx < p[i] - 1){
			maxx = p[i] - 1;//找最长回文
			index = i;
		}
	}
	int start = (index - maxx) / 2;
	for (int i = start; i < start + maxx; i++)
		printf("%c", s[i]);
	printf("\n");
	return maxx;
}
int main() {
	while (~scanf("%s", s)) {
		printf("%d\n", Manacher());
	}
}

```
https://www.jianshu.com/p/392172762e55
#### 逆元
```c++
typedef long long LL;
//扩展欧几里得算法
LL exgcd(LL a, LL b, LL& x, LL& y) {
	if (b == 0) {
		x = 1, y = 0;
 		return a;
 	}
 	LL ret = exgcd(b, a % b, y, x);
 	y -= a / b * x;
 	return ret;
}
//求a在mod下的逆元，不存在逆元返回-1 
LL getInv(int a, int mod) {
 	LL x, y;
 	LL d = exgcd(a, mod, x, y);
 	return d == 1 ? (x % mod + mod) % mod : -1;
}
```
#### dfs（深度优先搜索）
https://www.cnblogs.com/brucekun/p/8503042.html
```c++
void DFS(int x, int y) {
    if (满足所需要的条件) {
        相应的操作；
        return； 
    } else {
        for (int i = ; ;) {//如果是方向的话，会枚举方向
            枚举加方向的新坐标；
            if (界限 ：例如：有障碍，已经访问过......) 
                continue;
            设置已经访问新坐标；
            DFS(新坐标);
            恢复到未被访问；
        }
    }
}
```

```c++
int dfs(int cur, int pre, int dep) {//一般为1,0,1
	int ans = 1;
	for (int i = 0; i < edge[cur].size(); i++) {
		if (edge[cur][i] == pre)
			continue;
		ans += dfs(edge[cur][i], cur, dep + 1);
	}
	s.push_back(dep - ans);//记录每条路的最大深度
	return ans;
}
```
#### `bfs`（广度优先搜索）
https://www.cnblogs.com/brucekun/p/8503042.html
```c++
bool vis[maxn][maxn]; // 访问标记
int dir[4][2] = { 0,1,0,-1,1,0,-1,0 }; // 方向向量

struct node {// BFS 队列中的状态数据结构
    int x, y; // 坐标位置
    int ans; // 搜索步数统计器
};

int a[maxn];

bool check(node s) {// 约束条件检验
    if (!vis[s.x][s.y] && ...) // 满足条件
        return 1;
    else // 约束条件冲突
        return 0;
}

void bfs(node st) {
    memset<vis, 0, sizeof vis>;
    queue <node> q; // BFS 队列
    node now, next; // 定义当前和下一个
    st.ans = 0; // 计数器清零
    q.push(st); // 入队
    vis[st.x][st.y] = 1; // 访问标记
    while (!q.empty()) {
        now = q.front(); // 取队首元素进行扩展
        q.pop(); // 队首元素出队
        if (now == G) {// 出现目标态，此时为ans的min，退出
            ...... // 做相关处理
            return;
        }
        for (int i = 0; i < 4; i++) {
            next.x = now.x + dir[i][0];
            next.y = now.y + dir[i][1];
            next.ans = now.ans + 1; // 计数器加1
            if (check(next)) {// 如果状态满足约束条件则入队
                q.push(next);
                vis[next.x][next.y] = 1; //访问标记
            }
        }
    }
    return;
}
```

```c++
int n, m, sx, sy;
const int N = 1e2 + 10;
char s[N][N];
int use[N][N];
int qwe[4][2] = { {1,0},{-1,0},{0,1},{0,-1} };//上下左右 
bool jg(int x, int y) {//判断是否能走 
	if (x<1 || x>n || y<1 || y>m)//超出边界 
		return false;
	if (s[x][y] == '#')//为# 
		return false;
	if (use[x][y] == 1)//走过了 
		return false;
	return true;
}
void bfs() {
	memset(use, 0, sizeof use);//初始化 
	queue<pair<int, int> > que;
	que.push(pair<int, int>(sx, sy));
	use[sx][sy] = 1;//标记找到的位子 
	int sum = 0;
	while (!que.empty()) {//当前位子的上下左右能否走 
		pair<int, int> u = que.front();
		que.pop();
		sum++;
		for (int i = 0; i < 4; i++) {
			int nx = u.first + qwe[i][0];
			int ny = u.second + qwe[i][1];
			if (jg(nx, ny)) {
				use[nx][ny] = 1;
				que.push(pair<int, int>(nx, ny));
			}
		}
	}
	printf("%d\n", sum);
}
```
##### 	例题（`BFS和DFS`两种做法）
​	<a herf="https://blog.csdn.net/qq_49006646/article/details/107319460" >HDU-1312</a>
#### `ida`（迭代加深搜索）
<a herf="https://www.cnblogs.com/aininot260/p/9629655.html">https://www.cnblogs.com/aininot260/p/9629655.html</a>
#### 并查集（建树）
```c++
//输入各个数之间的关系，判断两数之间是否有父子节点的关系，若有，则输出YES；否则，输出NO并使较大的数成为较小的数的父节点
#include<bits/stdc++.h>
using namespace std;

const int maxn = 1011;
int fa[maxn];
int n;
void init() {
	n = 1000;
	for (int i = 0; i < n; i++)
		fa[i] = i;
}
int find(int x) {//并查集递归，找 祖 节 点，长链截短
	return x == fa[x] ? x : fa[x] = find(fa[x]);
}
void merge(int x, int y) {
	int fx = find(x);
	int fy = find(y);
	fa[fx] = fy;//把x的祖节点变成y的祖节点的子节点 
}
int main() {
	init();
	int x, y;
	while (~scanf("%d %d", &x, &y)) {
		if (find(x) == find(y))
			puts("YES");
		else {
			puts("NO");
			merge(x, y);
		}
	}
}
```
#### 最短路算法
##### 	单源
###### `dijkstra`算法
时间复杂度`O(n^2)`，处理200个点以下的数据，边权必须为正
```c++
void dijkstra(int x) {
	for (int i = 1; i <= n; i++)
		dis[i] = e[x][i];
	for (int i = 1; i <= n - 1; i++) { //找n-1轮
		int minn = inf, temp;
		for (int j = 1; j <= n; j++) { //找与上一个点最近的点
			if (vis[j] == 0 && dis[j] < minn) {
				minn = dis[j];
				temp = j;
			}
		}
		vis[temp] = 1;
		for (int j = 1; j <= n; j++) //找着最近的点后通过这个最近的点更新其余的点到起点的距离
			if (vis[j] == 0) 
				dis[j] = max(dis[j], dis[temp] + e[temp][j]);
	}
}

int main() {
	while (~scanf("%d%d", &n, &m) && n + m) {
		for (int i = 1; i <= n; i++) { 
			for (int j = 1; j <= n; j++) {
				if (i == j)
					e[i][j] = 0;
				else
					e[i][j] = inf;
			}
		}
		memset(vis, 0, sizeof(vis));
		int u, v, w;
		for (int i = 1; i <= m; i++) {
			scanf("%d%d%d", &u, &v, &w);
			if (w < e[u][v])
				e[u][v] = e[v][u] = w;
		}
		dijkstra(1);//起点为1
		printf("%d\n", dis[n]);
	}
	return 0;
}
```
###### `Bellman_ford`算法
```c++
struct Edge {
    int u, v, w;
} edge[11000];
int d[11000], n, m, t;

int bellman_ford() {
    for (int i = 0; i <= n; i++) d[i] = oo;
    d[1] = 0;
    for (int i = 0; i < n - 1; i++)
        for (int j = 0; j < t; j++)
            d[edge[j].v] = min(d[edge[j].v], d[edge[j].u] + edge[j].w);
    return d[n];
}
int main() {
    int x, y, p;
    while (scanf("%d%d", &n, &m) && n && m) {
        t = 0;
        while (m--) {
            scanf("%d%d%d", &x, &y, &p);
            edge[t].u = edge[t].v = x;
            edge[t].v = edge[t].u = y;
            edge[t].w = edge[t].w = p;
            t++;
        }
        printf("%d\n", bellman_ford());
    }
    return 0;
}
```
##### 	多源
###### `floyd`算法
时间复杂度`O(n^3)`
```c++
int dis[N][N];
void init(int n) {
	for (int i = 1; i <= n; i++) {
		for (int j = 1; j <= n; j++) {
			if (i == j)
				dis[i][j] = 0;
			else
				dis[i][j] = inf;
		}
	}
}
void floyd(int n) {
	for (int k = 1; k <= n; k++)
		for (int i = 1; i <= n; i++)
			for (int j = 1; j <= n; j++)
				dis[i][j] = min(dis[i][j], dis[i][k] + dis[k][j]);
}
int main() {
	int n, m;
	while (scanf("%d%d", &n, &m) && n && m) {
		init(n);
		while (m--) {
			int a, b, c;
			scanf("%d%d%d", &a, &b, &c);
			dis[a][b] = dis[b][a] = min(dis[a][b] , c);
		}
		floyd(n);
		printf("%d\n", dis[1][n]);
	}
	return 0;
}
```
###### `SPFA`算法
用于求含负权边的单源最短路径，以及判断负权环，时间复杂度`O(KE)`,E为边数，且K<2
```c++
void SPFA() {
	for (int i = 1; i <= n; i++)
		dis[i] = inf;
	queue<int>q;
	q.push(1);
    vis[1] = 1; 
    dis[1] = 0;
	while (q.size()) {
		x = q.front(); q.pop(); vis[x] = 0;
		for (int i = head[x]; i; i = a[i].next) {
			int s = a[i].to;
			if (dis[s] > dis[x] + a[i].cost) {
			    dis[s] = dis[x] + a[i].cost;
			    if (vis[s] == 0) {
			        vis[s] = 1;
			        q.push(s);
			    }
			}
		}
	}
}
```
#### 最小生成树`lca`
`kruskal`
边先排序，从小到大取，记录顶点，重复则跳过
`prim`
从一个点出发，取最近的点，比较所有取的点相连的边，取最小的边
#### 二叉搜索树
#### `DP`
##### 状压`DP`
状态压缩，将各种情况转换为位运算，方便计算
`i & (1 << j)`：判断第j位是否为1
`i | (1 << j)`：将第j位数字改为1
```c++
int W[20], C[20];
for (int i = 0; i < n; i++)
   scanf("%d %d", &C[i], &W[i]);
int res = -1;
for (int i = 0; i < (1 << n); i++) {
   for (int j = 0; j < n; j++) {
      if (!(i & (1 << j))) { //状态转移
         int temp = i | (1 << j);
         dp[temp] = dp[i] + W[j];
         dp1[temp] = dp1[i] + C[j];
      }
   }
}
for (int i = 0; i < (1 << n); i++) {
    printf(i);
    printf("\t%d\t%d\n", dp[i], dp1[i]);//打印出每种方案的情况，价值 和耗费的空间
}
```
##### 数位`DP`
通过限制上限的枚举方式遍历求解
按位遍历，如果有上限，只能取到当前位数；如果没上限，可取到9
```c++
typedef long long ll;
int a[20];
ll dp[20][state];//不同题目状态不同
ll dfs(int pos,/*state变量*/, bool lead/*前导零*/, bool limit/*数位上界变量*/) { //不是每个题都要判断前导零
	//递归边界，既然是按位枚举，最低位是0，那么pos==-1说明这个数我枚举完了
	if (pos == -1)
		return 1; /*这里一般返回1，表示你枚举的这个数是合法的，那么这里就需要你在枚举时必须每一位都要满足题目条件，也就是说当前枚举到pos位，一定要保证前面已经枚举的数位是合法的。不过具体题目不同或者写法不同的话不一定要返回1 */
	//第二个就是记忆化(在此前可能不同题目还能有一些剪枝)
	if (!limit && !lead && dp[pos][state] != -1)
		return dp[pos][state];
	int up = limit ? a[pos] : 9; //根据limit判断枚举的上界up;这个的例子前面用213讲过了
	ll ans = 0;
	//开始计数
	for (int i = 0; i <= up; i++) { //枚举，然后把不同情况的个数加到ans就可以了
		if ();
		else if ();
		ans += dfs(pos - 1,/*状态转移*/, lead && i == 0, limit && i == a[pos]) 
		       /*这里还算比较灵活，不过做几个题就觉得这里也是套路了大概就是说，我当前数位枚举的数是i，然后根据题目的约束条件分类讨论去计算不同情况下的个数，还有要根据state变量来保证i的合法性，比如题目要求数位上不能有62连续出现,那么就是state就是要保存前一位pre,然后分类，前一位如果是6那么这意味就不能是2，这里一定要保存枚举的这个数是合法*/
	}
	//计算完，记录状态
	if (!limit && !lead) 
		dp[pos][state] = ans;
	/*这里对应上面的记忆化，在一定条件下时记录，保证一致性，当然如果约束条件不需要考虑lead，这里就是lead就完全不用考虑了*/
	return ans;
}
ll solve(ll x) {
	int pos = 0;
	while (x) { //把数位都分解出来
		a[pos++] = x % 10; //个人老是喜欢编号为[0,pos),看不惯的就按自己习惯来，反正注意数位边界就行
		x /= 10;
	}
	return dfs(pos - 1/*从最高位开始枚举*/,/*一系列状态 */, true, true); //刚开始最高位都是有限制并且有前导零的，显然比最高位还要高的一位视为0嘛
}
int main() {
	ll le, ri;
	while (~scanf("%lld%lld", &le, &ri)) {
		//初始化dp数组为-1,这里还有更加优美的优化,后面讲
		printf("%lld\n", solve(ri) - solve(le - 1));
	}
}
```
##### 区间`DP`
通过合并小区间的最优解进而得出整个大区间上最优解
注意：环状区间需要将输入的数组*2

模板：
```c++
for (int len = 1; len <= n; len++) {//区间长度
	for (int l = 1; l + len - 1 <= n; l++) {//区间开始位置
		int r = l + len - 1;//区间结束位置
		if (l == r)
			dpmax[l][r] = dpmin[l][r] = 0;
		else {
			for (int k = l; k < r; k++) {//分割点
				dpmax[l][r] = max(dpmax[l][r], dpmax[l][k] + dpmax[k + 1][r] + 权值);
				dpmin[l][r] = min(dpmin[l][r], dpmin[l][k] + dpmin[k + 1][r] + 权值);
			}
		}
	}
}
```
**例题：环状石子合并**
**题意：**
> 将 n 堆石子绕圆形操场排放，现要将石子有序地合并成一堆。
> 规定每次只能选相邻的两堆合并成新的一堆，并将新的一堆的石子数记做该次合并的得分。
> 请编写一个程序，读入堆数 n 及每堆的石子数，并进行如下计算：
> 选择一种合并石子的方案，使得做 n−1 次合并得分总和最大。
> 选择一种合并石子的方案，使得做 n−1 次合并得分总和最小。
**输入格式：**
> 第一行包含整数 n，表示共有 n 堆石子。
> 第二行包含 n 个整数，分别表示每堆石子的数量。
**输出格式：**
> 输出共两行：
> 第一行为合并得分总和最小值，
> 第二行为合并得分总和最大值。
代码：
```c++
#include<bits/stdc++.h>
using namespace std;

typedef long long ll;
typedef unsigned long long ull;
const int N = 4e2 + 11;
const int inf = 0x3f3f3f3f;
const ll INF = 0x3f3f3f3f3f3f3f3f;

int a[N], sum[N], dpmax[N][N], dpmin[N][N];
int main() {
	int n;
	cin >> n;
	for (int i = 1; i <= n; i++) {
		cin >> a[i];
		a[i + n] = a[i];
	}
	for (int i = 1; i <= 2 * n; i++) {
		sum[i] = sum[i - 1] + a[i];
	}
	memset(dpmin, inf, sizeof dpmin);
	memset(dpmax, -1, sizeof dpmax);
	for (int len = 1; len <= n; len++) {
		for (int l = 1; l + len - 1 <= n * 2; l++) {
			int r = l + len - 1;
			if (l == r)
				dpmax[l][r] = dpmin[l][r] = 0;
			else {
				for (int k = l; k < r; k++) {
					dpmax[l][r] = max(dpmax[l][r], dpmax[l][k] + dpmax[k + 1][r] + sum[r] - sum[l - 1]);
					dpmin[l][r] = min(dpmin[l][r], dpmin[l][k] + dpmin[k + 1][r] + sum[r] - sum[l - 1]);
				}
			}
		}
	}
	int Max = -inf;
	int Min = inf;
	for (int i = 1; i <= n; i++) {
		Max = max(Max, dpmax[i][i + n - 1]);
		Min = min(Min, dpmin[i][i + n - 1]);
	}
	cout << Min << endl << Max << endl;
	return 0;
}

```
##### 最大上升子序列（LIS）
```c++
#include<iostream>
#include<cstdio>
#include<algorithm>
using namespace std;
const int N = 1e5 + 11;
const int inf = 0x3f3f3f3f;
int a[N], b[N], ans = -1;
void LIS(int n) {
	for (int i = 0; i < n; i++) {//只需保存结尾最小的数，
		scanf("%d", &a[i]);//找出比他大的第一个数
		int j = lower_bound(b, b + ans, a[i]) - b;
		ans = max(ans, j + 1);
		b[j] = a[i];
	}
}
int main() {
	memset(b, inf, sizeof b);
	int n;
	scanf("%d", &n);
	LIS(n);
	printf("%d\n", ans);
}

```
https://blog.csdn.net/lxt_Lucia/article/details/81206439
#### 逆序对数
使用归并排序（O nlog<sub>n</sub>）
```c++
#include<iostream>
#include<algorithm>
using namespace std;
const int N = 5e5 + 11;
int n, a[N + 5], temp[N + 5];
long long num;
 
void merge(int begin, int mid, int end) {
    int i = begin;
    int j = mid + 1;
    int k = begin;
    while (i <= mid && j <= end) {
        if (a[i] > a[j]) {
            temp[k] = a[j];
            k++;
            j++;
            num += mid - i + 1; //对交换的次数进行统计
        } else {
            temp[k] = a[i];
            k++;
            i++;
        }
    }
    while (i <= mid) {
        temp[k] = a[i];
        k++;
        i++;
    }
    while (j <= end) {
        temp[k] = a[j];
        k++;
        j++;
    }
    for (int p = begin; p <= end; p++)
        a[p] = temp[p];
}
 
void mergesort(int begin, int end) { //归并排序
    if (begin >= end)
        return;
    int mid = (begin + end) / 2;
    mergesort(begin, mid);
    mergesort(mid + 1, end);
    merge(begin, mid, end);
}
 
int main() {
    while (1) {
        cin >> n;
        if (n == 0) break;
        for (int i = 0; i < n; i++) cin >> a[i];
        num = 0;
        mergesort(0, n - 1);
        cout << num << endl;
    }
    return 0;
}
```
原理：https://www.jianshu.com/p/628fe66d6cad
实例：https://zhuanlan.zhihu.com/p/100542620
#### 贪心
#### 字符串hash
用途：求子串的出现次数或者公共子串的长度
hash函数：`hash[i]=hash[i-1]*进制数(素数)+当前字符的ASCII值`
常用素数：13331，233，131，1e9+7(一般会卡)，193(2^7)，1610612741(2^31)
##### 自然溢出法
用 unsigned long long 将溢出的值自动取2<sup>64</sup>-1的模，防止冲突(重复)
```c++
typedef unsigned long long ull;
char s[6];
ull hashs(char s[]) {
    int len = strlen(s);
    ull ans = 0;
    for (int i = 0; i < len; i++)
        ans = ans * base + (ull)s[i];
    return ans & 0x7fffffff;
}
```
##### 拉链法
##### 预处理
```c++
int a[N];
int base[N], hash[N];
const int p = 13331;
void init() {
	base[0] = 1;
	for (int i = 1; i < N; i ++)
		base[i] = base[i - 1] * p;
}
ull getsubhash(int start, int len) {
	return hash[start + len] - hash[start] * base[len];
}
```
#### 哈希排序
#### 线段树
##### 建树+区间求和+区间修改
```c++
#include<iostream>
using namespace std;
typedef long long ll;
const int N = 1e5 + 11;

struct Tree {
	int l, r;
	ll sum, lazy;
	void add(ll x) {
		sum += x * (r - l + 1);
		lazy += x;
	}
} tree[N << 2];

int a[N];

void pushup(int rt) {
	tree[rt].sum = tree[rt << 1].sum + tree[rt << 1 | 1].sum;
}

void pushdown(int rt) {
	tree[rt << 1].add(tree[rt].lazy);
	tree[rt << 1 | 1].add(tree[rt].lazy);
	tree[rt].lazy = 0;
}

void build(int rt, int l, int r) {
	tree[rt].l = l;
	tree[rt].r = r;
	tree[rt].sum = tree[rt].lazy = 0;
	if (l == r)
		tree[rt].sum = a[l];
	else {
		int mid = (l + r) >> 1;
		build(rt << 1, l, mid);
		build(rt << 1 | 1, mid + 1, r);
		pushup(rt);
	}
}

void update(int rt, int l, int r, ll val)
{
	int L = tree[rt].l, R = tree[rt].r;
	if (l <= L && R <= r)
		tree[rt].add(val);
	else {
		pushdown(rt);
		int mid = (L + R) >> 1;
		if (mid >= l)
			update(rt << 1, l, r, val);
		if (mid < r)
			update(rt << 1 | 1, l, r, val);
		pushup(rt);
	}
}

ll query(int rt, int l, int r) {
	int L = tree[rt].l, R = tree[rt].r;
	if (l <= L && R <= r)
		return tree[rt].sum;
	pushdown(rt);
	int mid = (L + R) >> 1;
	ll ans = 0;
	if (mid >= l)
		ans += query(rt << 1, l, r);
	if (mid < r)
		ans += query(rt << 1 | 1, l, r);
	pushup(rt);
	return ans;
}
int main() {
	//ios::sync_with_stdio(0);
	//cin.tie(0); cout.tie(0);
	int n, q;
	string s;
	scanf("%d%d", &n, &q);
	for (int i = 1; i <= n; i++)
		cin >> a[i];
	build(1, 1, n);
	while (q--) {
		cin >> s;
		if (s == "Q") {
			int a, b;
			scanf("%d%d", &a, &b);
			printf("%lld\n", query(1, a, b));
		} else {
			int a, b, c;
			scanf("%d%d%d", &a, &b, &c);
			update(1, a, b, c);
		}
	}
	return 0;
}
```
##### 染色问题
```c++

```
#### 二分
```c
int binary_search(int start, int end, int key) {
 	int ret = -1;  // 未搜索到数据返回-1下标
 	int mid;
 	while (start <= end) {//直接平均可能会溢出
  		mid = start + ((end - start)>> 1); 
    	if (arr[mid] < key)
      		start = mid + 1;
    	else if (arr[mid] > key)
      		end = mid - 1;
    	else {  
      		ret = mid;
      		break;
    	}
  	}
  	return ret;  // 单一出口
}
```
#### 背包问题
##### 01背包
```c++
for (int i = 1; i <= n; i++)
    for (int j = V; j >= 0; j--)
        f[j] = max(f[j], f[j - w[i]] + v[i]);
```
#### 图
##### 建图
###### 无向无权图
```c++
#include <bits/stdc++.h>
using namespace std;
const int N = 1e5;
vector<int> v[N];

int main() {
	int n, m;
	scanf("%d%d", &n, &m);
	int s, t;
	for (int i = 0; i < m; i++) {
		scanf("%d%d", &s, &t);
		v[s].push_back(t);
		v[t].push_back(s);
	}
	for (int i = 1; i < n; i++) {
		for (int j = 0; j < v[i].size(); j++)
			printf("%d ", v[i][j]);
		printf("\n");
	}
	return 0;
}
```
###### 	有向无权图
```c++
#include <bits/stdc++.h>
using namespace std;
const int N = 1e5;
vector<int> v[N];

int main() {
	int n, m;
	scanf("%d%d", &n, &m);
	int s, t;
	for (int i = 0; i < m; i++) {
		scanf("%d%d", &s, &t);
		v[s].push_back(t);
		v[t].push_back(s);
	}
	for (int i = 1; i < n; i++) {
		for (int j = 0; j < v[i].size(); j++)
			printf("%d ", v[i][j]);
		printf("\n");
	}
	return 0;
}
```
###### 有向有权图（链式前向星）
```c++
#include<bits/stdc++.h>
using namespace std;
const int maxn = 1005;//点数最大值
int n, m, cnt;//n个点，m条边
struct Edge {
	int to, w, next;//终点，边权，同起点的上一条边的编号
}edge[maxn];//边集
int head[maxn];
//head[i],表示以i为起点的第一条边在边集数组的位置（编号）
void init() {//初始化
	for (int i = 0; i <= n; i++) head[i] = -1;
	cnt = 0;
}
void add_edge(int u, int v, int w) {//u起点，v终点，w边权
	edge[cnt].to = v; //终点
	edge[cnt].w = w; //权值
	edge[cnt].next = head[u];//以u为起点上一条边的编号
	head[u] = cnt++;//更新以u为起点上一条边的编号
}
int main() {
	scanf("%d %d", &n, &m);
	int u, v, w;
	init();//初始化
	for (int i = 1; i <= m; i++) {
		scanf("%d %d %d", &u, &v, &w);
		add_edge(u, v, w);//加边
		/*加双向边
		add_edge(u, v, w);
		add_edge(v, u, w);*/
	}
	for (int i = 1; i <= n; i++) {//n个起点
		printf("%d\n", i);
		for (int j = head[i]; j != -1; j = edge[j].next)
		//遍历以i为起点的边
        {printf("%d %d %d\n",i,edge[j].to,edge[j].w);}
		printf("\n");
	}
	return 0;
}
/*
5 7
1 2 1
2 3 2
3 4 3
1 3 4
4 1 5
1 5 6
4 5 7
*/
/*对于1 2 1这条边：
    edge[0].to = 2;  edge[0].next = -1;  head[1] = 0;

对于2 3 2这条边：
    edge[1].to = 3;  edge[1].next = -1;  head[2] = 1;

对于3 4 3这条边：
    edge[2].to = 4;  edge[2],next = -1;  head[3] = 2;

对于1 3 4这条边：
    edge[3].to = 3;  edge[3].next =  0;  head[1] = 3;

对于4 1 5这条边：
    edge[4].to = 1;  edge[4].next = -1;  head[4] = 4;

对于1 5 6这条边：
    edge[5].to = 5;  edge[5].next =  3;  head[1] = 5;

对于4 5 7这条边：、
    edge[6].to = 5;  edge[6].next =  4;  head[4] = 6;*/
```
#### 二分图
##### 判断
无长度为奇数长的回路
###### 染色法：
```c++
bool bfs(int s) {
	queue<int> q;
	memset(col, 0, sizeof col);
	q.push(s);//当前点入队
	col[s] = 1;//当前点涂色
	while (!q.empty()) {
		int x = q.front();
		q.pop();
		for (int i = 0; i < edge[x].size(); i++) {
			int y = edge[x][i];//第i个关联点的下标
			if (col[y] == 0) {//若没涂色
				col[y] = 1^col[x];//涂相反的颜色
				q.push(y);
			}
			else
				if (col[x] == col[y])//颜色相同则不是
					return false;
		}
	}
	return true;
}
//判断bfs(1)
```
##### 	最大匹配/最小点覆盖
配对对数最多的情况。
完美匹配：所有顶点都有配对。完美匹配一定是最大匹配。
###### 	匈牙利算法
`o(n^2)`，根据一个初始匹配不停的找增广路，直到没有增广路为止。
```c++
int m, n;//m表示左侧集合，n表示右侧集合
int mapp[N][N];//邻接矩阵存图
int match[N];//左侧元素当前的匹配
int vis[N];//是否访问过
bool dfs(int x) {
    for (int i = 1; i <= n; ++i) {
        if (mapp[x][i] == 1 && vis[i] == 0) {
            vis[i] = 1;
            if (match[i] == 0 || dfs(match[i])) {
                match[i] = x;//匹配更新
                return true;
            }
        }
    }
    return false;
}
int matching() {
    int ans = 0;
    memset(match, 0, sizeof match);
    for (int i = 1; i <= m; i++) {
        memset(vis, 0, sizeof vis);
        if (dfs(i))
            ans++;
    }
    return ans;
}

```
##### 最优匹配
带权的最大匹配
###### `KM`算法
每次都帮一个顶点匹配最大权重边，利用匈牙利算法完成最大匹配
```c++
const int N = 301;
const int INF = (1 << 31) - 1;
int w[N][N];
int lx[N], ly[N]; //顶标
int link[N], linky[N];
int visx[N], visy[N];
int slack[N];
int n;
bool dfs(int x) {
    visx[x] = true;
    for (int y = 1; y <= n; y++) {
        if (visy[y])
            continue;
        int t = lx[x] + ly[y] - w[x][y];
        if (t == 0) {
            visy[y] = true;
            if (linky[y] == -1 || dfs(linky[y])) {
                linky[y] = x;
                return true;
            }
        } else if (slack[y] > t)
            slack[y] = t;
    }
    return false;
}
int KM() {
    int i, j;
    memset(linky, -1, sizeof(linky));
    memset(ly, 0, sizeof(ly));
    for (i = 1; i <= n; i++) {      //初始化顶标
        lx[i] = -INF;
        for (j = 1; j <= n; j++)
            if (w[i][j] > lx[i])
                lx[i] = w[i][j];
    }
    for (int x = 1; x <= n; x++) {
        for (i = 1; i <= n; i++)
            slack[i] = INF;
        while (true) {
            memset(visx, 0, sizeof(visx));
            memset(visy, 0, sizeof(visy));
            if (dfs(x))
                break;
            int d = INF;
            for (i = 1; i <= n; i++)
                if (!visy[i] && d > slack[i])
                    d = slack[i];
            for (i = 1; i <= n; i++)
                if (visx[i])
                    lx[i] -= d;
            for (i = 1; i <= n; i++) {
                if (visy[i])
                    ly[i] += d;
                else
                    slack[i] -= d;
            }
        }
    }
    int result = 0;
    for (i = 1; i <= n; i++)
        if (linky[i] > -1)
            result += w[linky[i]][i];
    return result;
}
int main() {
    while (scanf("%d", &n) == 1) {
        int cost;
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= n; j++) {
                scanf("%d", &cost);
                w[i][j] = cost;
            }
        }
        printf("%d\n", KM());
    }
    return 0;
}
```
##### 最小路径覆盖/最大独立集
最小路径覆盖 = 最大独立集 = 顶点数 - 最大匹配
#### 堆
##### 大顶堆
```c++
int n;
int H[N] = { 0 };
cin >> n ;
for (int i = 1; i <= n; i++) {
	cin >> H[i];
	t = i;
	while (t > 1 && H[t] > H[t >> 1]) {
		swap(H[t], H[t >> 1]);
		t >>= 1;
	}
}
```
##### 小顶堆
```c++
int n;
int H[N] = { 0 };
cin >> n ;
for (int i = 1; i <= n; i++) {
	cin >> H[i];
	t = i;
	while (t > 1 && H[t] < H[t >> 1]) {
		swap(H[t], H[t >> 1]);
		t >>= 1;
	}
}
```
#### 单调队列
将一个节点压入队列，这时分两种情况：
（1）队列为空，直接加入
（2）队列不为空，**比较队尾节点与该节点的大小，如果该节点比队尾节点要小（按照题意，让我们找最小的，如果是要找最大的，那就正好相反），就将队尾节点弹出，直到队列为空或者队尾节点比该节点小，将该节点插入；**
在加入节点时还要判断**该队列长度是否超过M**，**如果加入新节点后长度超过M，就将队头弹出**
总结一下：
弹出节点的情况有：
**1.加入新节点时，新节点比该队列队尾要小（对于该题目），将队尾弹出；**
**2.队尾位置-队头位置大于M，将对头弹出；**
加入节点的情况有：
**1.新节点大于（对于该题目）队尾；**
**2.队列为空；**

例题：<a herf=https://www.luogu.com.cn/problem/P1886> 洛谷P1886</a>

大致题意：有一个长为 *n* 的序列 *a*，以及一个大小为 *k* 的窗口。现在这个从左边开始向右滑动，每次滑动一个单位，求出每次滑动后窗口中的最大值和最小值。
```c++
#include<bits/stdc++.h>
using namespace std;
int x;
struct node {
    int num, val; //存储编号和大小
} s;
deque<node> que;
deque<node> que1;
int a[3][1000005]; //用以存储答案的----见代码
int main() {
    int n, k, cnt = 1;
    cin >> n >> k;
    for (int i = 1; i <= n; i++) {
        scanf("%d", &x); //输入
        s.num = i; s.val = x; //赋值
        while (!que.empty() && x >= que.back().val)
            que.pop_back();  //单调队列的操作，以保证单调
        while (!que1.empty() && x <= que1.back().val)
            que1.pop_back();
        que.push_back(s); //压入队列
        que1.push_back(s);//同上
        while (i - k >= que.front().num) //T掉不在范围内的
            que.pop_front();
        while (i - k >= que1.front().num)
            que1.pop_front(); //同上
        if (i >= k) {//存答案
            a[0][cnt] = que.front().val;
            a[1][cnt] = que1.front().val;
            cnt++;
        } 
    }
    for (int i = 1; i < cnt; i++)
        printf("%d ", a[1][i]);
    printf("\n");
    for (int i = 1; i < cnt; i++)
        printf("%d ", a[0][i]); //输出
    return 0;
}
```

```c++
#include<iostream>
#include<cstring>
#include<algorithm>
#include<cstdio>
#include<cstdlib>
#include<cmath>
using namespace std;
int n, m;
const int N = 1e6 + 11;
int q1[N], q2[N];
int a[N];
int minq(int tot, int len) {
    int head = 1, tail = 0;
    for (int i = 1; i <= tot; i++) {
        while (head <= tail && q1[head] + len <= i)
            head++;
        while (head <= tail && a[i] < a[q1[tail]])
            tail--;
        q1[++tail] = i;
        if (i >= len)
            printf("%d ", a[q1[head]]);
    }
    cout << endl;
}
int maxq(int tot, int len) {
    int head = 1, tail = 0;
    for (int i = 1; i <= tot; i++) {
        while (head <= tail && q2[head] + len <= i)
            head++;
        while (head <= tail && a[i] > a[q2[tail]])
            tail--;
        q2[++tail] = i;
        if (i >= len)
            printf("%d ", a[q2[head]]);
    }
}
int main() {
    cin >> n >> m;
    for (int i = 1; i <= n; i++)
        scanf("%d", &a[i]);
    minq(n, m);
    maxq(n, m);
    return 0;
}
```
#### 大数除法
```c++
int x;//除数
int s = 0, n = 0; //被除数，位数
scanf("%d", &x);
while (s < x) {
    s = s * 10 + 1; //被除数末尾加一，直到不小于除数
    n++;
}
while (1) {
    printf("%d", s / x); //进行除法运算输出商从高位输出
    s %= x; //被除数更新为余数
    if (s == 0) //如果余数为0，则结束
        break;
    s = s * 10 + 1; //余数末位加一
    n++;//位数加一
}
```
#### 字典树`trie tree`（前缀树）
原理：将所有字符串建成一棵树，用边记录字符，公共节点记录不同的后缀，用结束标记记录字符串结束位置
```c++
#include<cstdio>
#include<iostream>
#include<cstring>
using namespace std;
const int N = 1000000 + 10;
const int lenth = 26;
int trie[N][lenth] = {0};
int color[N] = {0};
int k = 1;
//Trie[i][j] == 0表示trie树中i号节点，没有一条连出去的边满足
//边上的字符标识是字符集中第j个字符（从0开始）
//
//trie[i][j]的值是正整数x表示trie树中i号节点有一条连出去的边，
//满足边上的字符标识是字符集中第j个字符且该边终点是x号节点。
void insert(char *w) {
    int len = strlen(w);
    int p = 0;
    for (int i = 0; i < len; i++) {
        int c = w[i] - 'a';
        if (!trie[p][c]) {
            trie[p][c] = k;
            k++;
        }
        p = trie[p][c];
    }
    color[p] = 1;
}

int search(char *s) {
    int len = strlen(s);
    int p = 0;
    for (int i = 0; i < len; i++) {
        int c = s[i] - 'a';
        if (!trie[p][c])
            return 0;
        p = trie[p][c];
    }
    return color[p] == 1;
}

int main() {
    int t, q;
    char s[20];
    scanf("%d%d", &t, &q);
    while (t--) {
        scanf("%s", s);
        insert(s);
    }
    while (q--) {
        scanf("%s", s);
        if (search(s))
            printf("YES\n");
        else
            printf("NO\n");
    }
    return 0;
}
```
#### KMP算法
用next数组存最长的相同前缀减少遍历的次数
```c++
void getnext(char *p, int *next) {
   next[0] = -1;
   int i = 0, j = -1;
   while (i < strlen(p)) {
      if (j == -1 || p[i] == p[j]) {
         ++i;
         ++j;
         next[i] = j;
      } else
         j = next[j];
   }
}

int kmp(char *t, char *p) {
   int i = 0;
   int j = 0;
   getnext(char *p, char *next);
   while (i < strlen(t) && j < strlen(p)) {
      if (j == -1 || t[i] == p[j]) {
         i++;
         j++;
      } else
         j = next[j];
   }
   if (j == strlen(p))
      return i - j;
   else
      return -1;
}

```
#### 博弈论
##### 巴什博弈
题目：两人轮流每次在一堆n个物品中拿1~m个物品，拿光者胜出。

设`n=k(m+1)+b`，`b=0`时，先手拿x个，只要后手拿`m+1-x`个就必胜，所以**后手必胜**；`b!=0`时，先手拿b个，后手拿x个，先手只要再拿`m+1-x`个就必胜，所以**先手必胜**

```c++
int n, m;
cin >> n >> m;
if (n % (m + 1))
	cout << "b win";
else
	cout << "a win";
```

##### 威佐夫博弈 

题目：两堆物品m和n，两个人轮流从一堆物品里面拿若干个或者从两堆中拿相同数量的物品，取光者胜出。

先手必败的情况为：`<0,0> <1,2> <3,5> <4,7> <6,10>……<a[i],a[i]+i>`，`a[i]`为当前从未出现的最小自然数，`i`为次序，此时的情况称为奇异局势，若`abs(m-n)*(int)((sqrt(5)+1)/2.0)==min(n,m)`则**先手必败**

```c++
int n, m;
cin >> n >> m;
double temp = (sqrt(5) + 1) / 2.0;
if ((int)(abs(m - n) * temp) == min(n, m))
	cout << "b win";
else
	cout << "a win";
```

##### 斐波那契博弈

题目：一堆n个数量的物品中两人轮流取，每次至少取1个，但是每次取的数量不能超过上次取的数目的两倍（n>=2且第一次取的时候不能取完）

n为斐波那契数时先手必败

```c++
11 a[60], n;
a[0] = 1;
a[1] = 1;
for (int i = 2; i <= 50; i++) // 可以满足n在int范围内
	a[i] = a[i - 1] + a[i - 2] ;
scanf("%lld", &n)) 
if (binary_search(a, a + 50, n))
	printf("Second Win\n");
else
	printf("First Win\n");

```

##### 尼姆博弈

题目：在n堆物品中，每人每次只能在一堆里面至少拿一个，无上限，当取完最后一个时该人获胜。

对每一堆的数量进行异或运算，当结果是0时先手必败。

```c++
int n, ans, temp;
scanf("%d", &n);
temp = 0; //0和任何数异或都为其本身；
for (int i = 0; i < n; i++) {
    scanf("%d", &ans);
    temp ^= ans;
}
if (temp == 0)  
    printf("a win");
else 
    printf("b win");
```
`hdu1580`
题意：尼姆博弈，且需要输出先手方案个数
```c++
#include<iostream>
#include<cstdio>
#include<algorithm>
using namespace std;

const int N = 1e6 + 11;
int a[N];
int main() {
	int n;
	while (scanf("%d", &n) && n) {
		int ans = 0;
		for (int i = 0; i < n; i++) {
			scanf("%d", &a[i]);
			ans ^= a[i];
		}
		int sum = 0;
		for (int i = 0; i < n; i++) {
			int temp = ans ^ a[i];
			if (temp < a[i])
				sum++;
		}
		printf("%d\n", sum);
	}
	return 0;
}
```
##### 反尼姆博弈
题目：在n堆物品中，每人每次只能在一堆里面至少拿一个，无上限，当取完最后一个时该人失败。
对每一堆的数量进行异或运算`ans`，记录富裕堆（物品数量>1）的个数`cnt`，当`ans == 0 && cnt == 0 || ans != 0 && cnt != 0`时**先手必胜**。

```c++
int n;
scanf("%d", &n);
int x, y, sum = 0, ans = 0;
for (int i = 0; i < n; i++) {
    scanf("%d", &x);
    if (x > 1)
        sum++;
    ans ^= x;
}
if ((!sum && !ans) || (sum && ans))
    puts("a win");
else
    puts("b win");

```

##### `SG`函数
#### 网络流
https://blog.csdn.net/txl199106/article/details/64441994
##### 最大流
从源点s到汇点t的的流量的最大值
最大流 = 最小割
```c++
#include <queue>  
#include <cstdio>  
#include <cstring>  
#include <iostream>  
using namespace std;  
const int MAXN = 300;  
const int MAX_INT = ((1 << 31) - 1);  
  
int n;// 图中点的数目  
int pre[MAXN];// 从 s - t 中的一个可行流中, 节点 i 的前序节点为 Pre[i];  
bool vis[MAXN];// 标记一个点是否被访问过  
int mp[MAXN][MAXN];// 记录图信息  
int s, t;//s为源点，t为汇点
bool bfs(int s, int t) {  
    queue <int> que;  
    memset(vis, 0, sizeof(vis));  
    memset(pre, -1, sizeof(pre));  
    pre[s] = s;  
    vis[s] = true;  
    que.push(s);  
    while(!que.empty()) {  
        int u = que.front();  
        que.pop();  
        for(int i = 1; i <= n; i++) {  
            if(mp[u][i] && !vis[i]) {  
                pre[i] = u;  
                vis[i] = true;  
                if(i == t) return true;  
                que.push(i);  
            }  
        }  
    }  
    return false;  
}  
  
int EK(int s, int t) {  
    int ans = 0;  
    while(bfs(s, t)) {  
        int mi = MAX_INT;  
        for(int i = t; i != s; i = pre[i])
            mi = min(mi, mp[pre[i]][i]); 
        for(int i = t; i != s; i = pre[i]) {  
            mp[pre[i]][i] -= mi;  
            mp[i][pre[i]] += mi;  
        }  
        ans += mi;  
    }  
    return ans;  
}
```
##### `dinic`
```c++
#include <iostream>
#include <cstdio>
#include <queue>
#include <cstring>
using namespace std;

const int N = 205;
const int inf = 0x3f3f3f3f;
struct Edge {
	int fr, to, len;
	int next;
} e[N];
int n, m;
int edn;//边数
int pre[N];//父亲
int dep[N];//层数
int s, t; //源点，汇点


void init() {
	edn = 0;
	memset(pre, -1, sizeof(pre));
	s = 1; t = n;
}

void add(int u, int v, int c) { //加边
	e[edn].fr = u; e[edn].to = v; e[edn].len = c;
	e[edn].next = pre[u]; pre[u] = edn++;
	e[edn].fr = v; e[edn].to = u; e[edn].len = 0;
	e[edn].next = pre[v]; pre[v] = edn++;
}

int bfs() { //建分层图
	memset(dep, -1, sizeof(dep));
	dep[s] = 0;
	queue<int> q;
	q.push(s);
	while (!q.empty()) {
		int temp = q.front();
		q.pop();
		for (int i = pre[temp]; i != -1; i = e[i].next) {
			int x = e[i].to;
			cout << dep[x] << endl;
			if (dep[x] == -1 && e[i].len > 0) {
				dep[x] = dep[temp] + 1;
				q.push(x);
			}
		}
	}
	return dep[t] != -1;
}

int dfs(int a, int b) { //寻找增广路
	int sum = 0;
	if (a == t)
		return b;
	for (int i = pre[a]; i != -1 && sum < b; i = e[i].next) {
		int temp = e[i].to;
		if (e[i].len > 0 && dep[temp] == dep[a] + 1) {
			int x = min(e[i].len, b - sum);
			x = dfs(temp, x);
			sum += x;
			e[i].len -= x;
			e[i ^ 1].len += x;
		}
	}
	if (!sum)
		dep[a] = -2;//到底了，无需继续找
	return sum;
}

int dinic() { //bfs+dfs
	int ans = 0, t;
	while (bfs()) {
		while (t = dfs(s, inf))
			ans += t;
	}
	return ans;
}

int main() {
	int u, v, c;
	while (~scanf("%d%d", &m, &n)) {
		init();
		for (int i = 0; i < m; i++) {
			scanf("%d%d%d", &u, &v, &c);
			add(u, v, c);
		}
		printf("%d\n", dinic());
	}
	return 0;
}
```
#### 快速幂
指数/2，底数*底数
( a * b ) % c = ( a % c * b % c ) % c
注意：记录指数为奇时多出来的底数
```c++
typedef long long ll;
const int mod = 1000;
ll fastPower(ll base, ll power) {
    ll ans = 1;
    while (power) {
        if (power & 1 == 1) 
            ans = ans * base % mod;
        power >>= 1;
        base = (base * base) % mod;
    }
    return ans;
}
```
#### 矩阵快速幂
快速幂中的乘法改成矩阵乘法
```c++
typedef long long ll;
struct matr {
	ll m[101][101];
};//存储结构体
matr a, e; //a是输入的矩阵，e是输出的矩阵
matr calc(matr x, matr y) {
	matr c;
	for (int i = 1; i <= n; ++i)
		for (int j = 1; j <= n; ++j)
			c.m[i][j] = 0;
	for (int i = 1; i <= n; ++i)
		for (int j = 1; j <= n; ++j)
			for (int k = 1; k <= n; ++k)
				c.m[i][j] = c.m[i][j] % mod + x.m[i][k] * y.m[k][j] % mod;
	return c;
}
matr pow(matr x, ll y) { //矩阵快速幂
	matr ans = e;
	while (y) {
		if (y & 1)
			ans = calc(ans, x);
		x = calc(x, x);
		y >>= 1;
	}
	return ans;
}
```

# 函数
#### `memset()`函数
头文件：`#include<cstring>`
结构：`memset(数组,赋值,sizeof 数组)`
作用：给s数组按字节初始化，`int`数组一般赋0或-1或`INF`

```c++
#include<stdio.h>
#include<cstring>
using namespace std;
int main() {
	int s[5];
	memset(s, -1, sizeof s);
	for (int i = 0; i < 5; i++)
		printf("%d ", s[i]);
}
//输出：-1 -1 -1 -1 -1
```

#### `sort()`函数

头文件：`#include<algorithm>`

结构：`sort(数组,数组+数组长度)`

作用：排序

```c
#include<stdio.h>
#include<algorithm>
int main() {
	int s[3] = { 3, 1, 2 };
	sort(s, s + 3);
	for (int i = 0; i < 3; i++)
		printf("%d ", s[i]);
}
//输出：1 2 3
```

#### `next_permutation()`函数

头文件：`#include<algorithm>`

结构：`next_permutation(数组，数组+排列长度)`

作用：将当前排列的下一个前n个数的进行全排列，如果有，输出true;

```c++
#include<iostream>
#include<algorithm>
using namespace std;
int main()
{
	int a[7] = { 1,2,3,4,5,6,7 };
	sort(a, a + 7);
	int n = 0;
	do {
		if (n == 1654) {
			for (int i = 0; i < 7; i++)
				cout << a[i];
			cout << endl;
			break;
		}
		n++;
	} while (next_permutation(a, a + 7));;
}
//输出：（第1654个排列）3267514
```

#### 重载运算符

头文件：`#include<iostream>`

作用：重新定义大小顺序，用于结构体排序和队列的输入

结构：

```c++
struct Node
{
	int ans, id, cnt;
	friend bool operator<(const Node& a, const Node& b) {
		if (a.ans == b.ans) {
			if (a.cnt == b.cnt)
				return a.id > b.id;
			else
				return a.cnt > b.cnt;
		}
		return a.ans > b.ans;
	}
}node[N];
//优先级按照ans>cnt>id进行从大到小排序
```



#### `lower_bound()`函数

头文件：`#include<algorithm>`

结构：`lower_bound(数组,数组+数组长度,要找的数)`

作用：输出该数组（已排序）中第一个大于等于要找的数的地址，减去首地址就是找出的数的下标

```c++
#include<algorithm> 
using namespace std;
int main() {
	int a[5] = { 2,1,5,8,4 };
	sort(a, a + 5);
	int x = 4;
	int p = lower_bound(a, a + 5, x) - a;
	if (a[p] == x)
		printf("%d", p);
	else
		printf("no");
}
//输出:2
```

#### `binary_search()`函数

头文件：`#include<algorithm>`

结构：`binary_search(数组,数组+数组长度,要找的数)`

作用：以`O(n^2)`的时间复杂度输出已排序数组中是否有该数，有，输出1，无，输出0；

```c++
#include<algorithm> 
using namespace std;
int main() {
	int a[5] = { 2,1,5,8,4 };
	sort(a, a + 5);
    bool x = binary_search(a, a + 5, 2);
	if (x == true)
		printf("true");
	else
		printf("false");
}
//输出true
```

#### `unique()`函数

头文件：`#include<algorithm>`

结构：`unique(数组,数组+长度)`

作用：去重（必须先排序）

```c++
#include<iostream>
#include<cstdio>
#include<algorithm>
using namespace std;
const int N = 100000;
int a[N + 5];
int main() {
	int n;
	while (cin >> n) {
		for (int i = 0; i < n; ++i) 
			scanf("%d", &a[i]);
		sort(a, a + n);
		n = unique(a, a + n) - a;
		for (int i = 0; i < n; ++i) 
			printf("%d ", a[i]);
		puts("");
	}
	return 0;
}
```

# 数论

#### 费马小定理

a^p%p=a%p

a^(p-1)%p=1

#### 欧拉函数

1~n-1与n互质的数的个数

通式：φ(n)=n * (1-1/p1) * (1-1/p2) * (1-1/p3) * (1-1/p4)…… * (1-1/pn)

```c++
typedef long long ll;
ll phi(ll n) {
	ll ans = n;
	for (ll i = 2; i * i <= n; i++) {
		if (n % i == 0) {
			ans = ans / i * (i - 1);
			while (n % i == 0)
				n /= i;
		}
	}
	if (n > 1)
		ans = ans / n * (n - 1);
	return ans;
}
```

# `STL`语法

#### 不定长数组：`vector`

创立：`vector<类型> v;`

末尾添加元素：`v.push_back(i)`

末尾删除元素：`v.pop_back(i)`

求长：`v.size()`

其中某一个量：`v[i]`

首地址：`v.begin()`

尾地址：`v.end()`

插入元素：`v.insert(位置，(数量，)值)`

判断是否为空：`v.empty()`

清空值：`v.clear()`

#### 字符串：`string`

创立：`string s;`

创立字符串s的复制：`string str(s);`

求长：`s.size()`

可以按照字典序比较：`s1>s2`

比较函数：`A.compare(B)`，等于输出0，大于输出1

末尾添加元素：`s.push_back()`

插入元素：`s.insert()`

字符串拼接：`s1+s2`

删除：`s.erase(地址，(地址))//单个地址是删除该地址的字符，两个地址时删除两地址间的字符(包括自身地址的字符)`

排序：`sort(s.begin(),s.end())`

替换：`s.replace(pos,n,n1,c)//将当前字符串从pos索引开始的n个字符，替换成n1个字符c`

s中某一段：`substr(首地址，长度)`

#### 集合：`set`

`set`的存储结构为二叉树（存储时自动递增排序并去重）

创立：`set<类型> st;`

第一个迭代器：`st.begin()`

最后一个迭代器：`st.end()`

删除所有元素：`st.clear()`

判断是否为空：`st.empty()`

set可能包含的元素的最大个数：`st.max_size()`

当前set中的元素个数：`st.size()`

插入元素`x`：`st.insert(x)`

查找`x`的迭代器：`set<int>::iterator it = st.find(x)`

删除`x`：`st.erase(x)`

删除一段：`st.erase(地址,地址)`

#### 映射：`map`

创立：`map<类型,类型> m`

插入元素：`m.insert(pair<类型，类型>(数据，数据))`（无法插入有重复关键字的数据）或者`m[i]=数据`（相同下标的数据会覆盖）

清空：`m.clear()`

数据的个数：`m.size()`

迭代器：`map<类型,类型>::iterator iter`

迭代器赋值关键字或者数据：`iter->first`(关键字)  `iter->second`(数据)

第一个元素的关键字：`m.begin()`

最后一个元素的关键字：`m.end()`

查找元素：`iter=m.find(关键字)`

删除某个数据：`m.erase(m.find(关键字))`

#### 栈：`stack`

建立：`stack<类型> stk`

插入：`stk.push(数值)`

判断是否为空：`stk.empty()//为空返回 真`

删除栈顶元素：`stk.pop()`

返回栈顶元素：`stk.top()`

交换两个栈的元素：`stk1.swap(stk2)`

#### 队列：`queue`

建立：`queue<类型> q`

返回最后一个元素 ：`q.back()`

删除第一个元素：`q.pop()`

返回第一个元素：`q.front()`

判断是否为空：`q.empty()//若空则返回 真`

队尾添加一个元素：`q.push()`

队列中元素的个数：`q.size()`

清空队列：

```c++
void clear(queue<int>& q) {
    queue<int> empty;
    swap(empty,q);
}
```
#### 优先队列：`priority_queue`

建立：`priority_queue<数据类型,容器类型(只能用数组),优先级(重载运算符)> pq`

```c++
//升序队列，小顶堆
priority_queue <int,vector<int>,greater<int> > q;
//降序队列，大顶堆
priority_queue <int,vector<int>,less<int> >q;
```

其他同queue

#### 双向队列：`deque`

建立：`deque<类型> de`

返回第一个元素的位置：`de.begin()`

返回反向队列最后一个元素（原队列的第一个）的前一个的位置：`de.rbegin()`

返回最后一个元素后一个的位置：`de.end()`

返回反向队列第一个元素（原队列的最后一个）的位置：`de.rend()`

判断是否为空：`de.empty()`

返回第一个元素的值：`de.front()`

返回最后一个元素的值：`de.back()`

*de*中元素的个数：`de.size()`

清空元素：`de.clear()`

在末尾位置插入元素：`de.push_back(num)`

删除末尾位置的元素：`de.pop_back()`

在开头位置插入元素：`de.push_front(num)`

删除开头位置的元素：`de.pop_front()`

在`pos`位置插入元素：`de.insert(pos,num)`

在`pos`位置插入n个元素：`de.insert(pos,n,num)`

在`pos`位置插入区间为[beg,end)的元素：`de.insert(pos,beg,end)`

删除`pos`位置的元素：`de.erase(pos)`

删除区间为[beg,end)的元素：`de.erase(beg,end)`

删除区间为[beg,end)之间的元素：`de.erase(beg,end)`

# 特别方法

##### 输出n个数字，每个数字之间隔一个空格，最后一个空格改为换行

```c
#include<stdio.h>
int main() {
	int a[5] = { 1,2,3,4,5 };
	for (int i = 0; i < 5; i++)
		printf("%d%c", a[i], "\n"[i == 4]);
}
输出：1 2 3 4 5\n
```

##### 位运算

`a<<1 <==> a*2`

`a>>1 <==> a/2`

`a&1==1 <==> a%2==1`

##### `int`中的最大值

```c++
const int inf = 0x3f3f3f3f
```

##### `long long`中的最大值

```c++
const long long INF = 0x3f3f3f3f3f3f3f3f
```

##### 简写

```c++
typedef long long/*原函数名*/ ll/*修改后名*/
```
