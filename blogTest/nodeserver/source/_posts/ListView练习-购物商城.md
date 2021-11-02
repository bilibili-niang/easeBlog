title: ListView练习_购物商城
author: IceStone
tags:
  - android
categories:
  - android
abbrlink: 4285
date: 2021-10-11 20:52:00
---
> 如图:

![运行的图片](/images/pasted-19.png)

> 文件目录结构:


![文件目录](/images/pasted-21.png)


`activity_main.xml`:
```xml
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical"
    tools:context=".MainActivity">

    <TextView
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:background="@color/purple_200"
        android:gravity="center"
        android:paddingTop="10dp"
        android:paddingBottom="10dp"
        android:text="购物商城"
        android:textSize="20dp"
        android:textStyle="bold" />

    <ListView
        android:id="@+id/lv"
        android:layout_width="match_parent"
        android:layout_height="match_parent" />
</LinearLayout>
```

`list_item.xml`:
```xml
<?xml version="1.0" encoding="utf-8"?>
<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:padding="16dp">

    <ImageView
        android:id="@+id/img"
        android:layout_width="120dp"
        android:layout_height="90dp"
        android:layout_centerVertical="true" />

    <RelativeLayout
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_centerVertical="true"
        android:layout_marginLeft="10dp"
        android:layout_toRightOf="@+id/img">

        <TextView
            android:id="@+id/title"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:text="桌子"
            android:textColor="@color/black"
            android:textSize="20sp" />

        <TextView
            android:id="@+id/lv_price"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:layout_below="@+id/title"
            android:text="价格"
            android:textSize="20sp" />

        <TextView
            android:id="@+id/price"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:layout_below="@+id/title"
            android:layout_marginLeft="10dp"
            android:layout_toRightOf="@+id/lv_price"
            android:text="1000"
            android:textSize="20sp" />
    </RelativeLayout>
</RelativeLayout>
```

`MainActivity.java`:
```java
package com.example.listview;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.AdapterView;
import android.widget.BaseAdapter;
import android.widget.ImageView;
import android.widget.ListView;
import android.widget.TextView;

import java.util.ArrayList;
import java.util.List;

public class MainActivity extends AppCompatActivity {
    //    创建需要用的数据
    private String[] titles = {
            "桌子", "苹果", "蛋糕", "线衣", "猕猴桃", "围巾"
    };
    private String[] prices = {
            "1800元", "10元/kg", "300元", "350元", "10元/kg", "280元"
    };
    private int[] icons = {R.drawable.table, R.drawable.apple, R.drawable.cake, R.drawable.cotton, R.drawable.peach, R.drawable.shawl};

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
//        LayoutInflater factory = LayoutInflater.from(MainActivity.this);
//        View layout = factory.inflate(R.layout.list_item, null);

        ListView lv = findViewById(R.id.lv);
        MyAdapter myAdapter = new MyAdapter();
        lv.setAdapter(myAdapter);
    }

    class MyAdapter extends BaseAdapter {
        public int getCount() {
            return titles.length;
        }

        @Override
        public Object getItem(int i) {
            return null;
        }

        public long getItemId(int position) {
            return position;
        }

        @Override
        public View getView(int position, View convertView, ViewGroup parent) {
            View view = View.inflate(MainActivity.this, R.layout.list_item, null);
            TextView title = (TextView) view.findViewById(R.id.title);
            TextView price = (TextView) view.findViewById(R.id.price);
            ImageView img = (ImageView) view.findViewById(R.id.img);
            title.setText(titles[position]);
            price.setText(prices[position]);
            img.setBackgroundResource(icons[position]);
            return view;
        }
    }
}
```


> ps:用的时候记者改包名,要不然跑不了,对着红色的包名按下`alt`+`enter`(如果你用的是android studio)即可