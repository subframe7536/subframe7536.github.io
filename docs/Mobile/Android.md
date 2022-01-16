## Gradle
### 远程仓库
[Android Studio导入第三方库的三种方法 - 中国人醒来了 - 博客园 (cnblogs.com)](https://www.cnblogs.com/it-tsz/p/11506199.html)
#### 根目录的`build.gradle`
```groovy
allprojects {
    repositories {
        google()
        jcenter()
		//maven地址
        maven { url 'https://jitpack.io' }
    }
}
```
#### app文件夹的`build.gradle`
```groovy
dependencies {  
	 ……
	 implementation 'com.github.stf-android:Permissions:-SNAPSHOT'  
}
```
## RecycleView
### adapter
```java
public class ItemAdapter extends Adapter<ItemAdapter.mViewHolder> {
    private ArrayList<Song> songList;
    private Context mContext;
    private ItemAdapter.OnItemClickListener mListener;

    public ItemAdapter(Context context,ArrayList<Song> list) {
        mContext = context;
        songList = list;
    }
    public ItemAdapter(Context context, ArrayList<Song> list, ItemAdapter.OnItemClickListener listener) {
        mContext = context;
        songList = list;
        mListener = listener;
    }

    @NonNull
    @Override
    public mViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.activity_item, parent, false);
        return new mViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull mViewHolder holder, int position) {        holder.duration.setText(TimeUtil.secToString(song.getDuration()));
        holder.view.setOnClickListener(v-> mListener.onClick(position));
    }


    @Override
    public int getItemCount() {
        return songList.size();
    }

    static class mViewHolder extends ViewHolder {
        View view;

        public mViewHolder(@NonNull View itemView) {
            super(itemView);
            view = itemView;
        }
    }
    public interface OnItemClickListener {
        void onClick(int pos);
    }
}
```
### MainActivity
```java
package com.hznu.ex11;

import android.Manifest;
import android.content.pm.PackageManager;
import android.database.Cursor;
import android.os.Bundle;
import android.provider.MediaStore;
import android.widget.Toast;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.app.ActivityCompat;
import androidx.core.content.ContextCompat;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;
import com.hznu.ex11.Adapter.ItemAdapter;
import com.hznu.ex11.Entity.Song;

import java.util.ArrayList;

public class MainActivity extends AppCompatActivity {

    private final ArrayList<Song> songs = new ArrayList<>();

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
		initList(songs);
        RecyclerView list = findViewById(R.id.SongList);
        list.setAdapter(new ItemAdapter(MainActivity.this, songs, position -> {
            Song curSong = songs.get(position);
            showToast("outer");
        }));
        list.setLayoutManager(new LinearLayoutManager(this));
    }
}
```
## 动态申请权限
```java
if (ContextCompat.checkSelfPermission(this, Manifest.permission.READ_EXTERNAL_STORAGE) != PackageManager.PERMISSION_GRANTED) {  
	ActivityCompat.requestPermissions(this, new String[]{Manifest.permission.READ_EXTERNAL_STORAGE}, 1);  
}  
```
[android 6.0以上动态一次申请多个权限](https://www.jianshu.com/p/891207f69ebe)
## 获取系统媒体库
```java
// content://media/external/audio/media
Uri uri = MediaStore.Audio.Media.EXTERNAL_CONTENT_URI;
Cursor cursor = getContentResolver().query(uri, null, null, null, null);
```
## 内存泄漏
[Android APP常见的5类内存泄露及解决方法 - 庚拓天下 - 博客园 (cnblogs.com)](https://www.cnblogs.com/genggeng/p/7121351.html)
## BitMap与Drawable转换
[Drawable与 Bitmap 转换总结 - a318013800 - 博客园 (cnblogs.com)](https://www.cnblogs.com/pengmn/p/15110177.html)
## TextView超出隐藏
[TextView文本超出截断（显示... u014317901的博客-CSDN博客_textview超出部分显示](https://blog.csdn.net/u014317901/article/details/54962272)
## glide图片框架
[Glide使用总结_augfun的博客-CSDN博客_glide使用](https://blog.csdn.net/augfun/article/details/105963476)
## activity和fragment通信
[一次搞懂Activity和Fragment之间的通信方式 - 简书 (jianshu.com)](https://www.jianshu.com/p/b0b6f74b2976)