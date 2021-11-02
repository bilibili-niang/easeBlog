title: android的listView复习
author: IceStone
tags:
  - android
categories: []
date: 2021-10-24 20:47:00
---
> 复习作业

*run:*


![运行效果](/images/pasted-30.png)

---

`MainActivity.jaja`:
```java
package com.example.listviewreview2;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.view.ViewGroup;
import android.widget.BaseAdapter;
import android.widget.ImageView;
import android.widget.ListView;
import android.widget.TextView;


public class MainActivity extends AppCompatActivity {
    //    创建需要用的数据
    private String[] titles = {
            "味妙烤鱼吧", "桃源酒家", "俏巴蜀", "蜜语芭蕾休闲西餐厅", "Grinders西餐酒吧", "昆达理尼瑜伽馆黄金店"
    };
    private String[] prices = {
            "98", "128", "88", "39", "108", "280"
    };
    private int[] icons = {R.drawable.img, R.drawable.img_1, R.drawable.img_2, R.drawable.img_3, R.drawable.img_4, R.drawable.img_5};

    private String[] BuyPrices = {
            "32", "3", "1", "11", "3", "77"
    };

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
            View view = View.inflate(MainActivity.this, R.layout.listview, null);
            TextView title = (TextView) view.findViewById(R.id.title);
            TextView price = (TextView) view.findViewById(R.id.price);
            ImageView img = (ImageView) view.findViewById(R.id.img);
            TextView price2 = (TextView) view.findViewById(R.id.BuyPrice);
            title.setText(titles[position]);
            price.setText(prices[position]);
            img.setBackgroundResource(icons[position]);
            price2.setText(BuyPrices[position]);
            return view;
        }
    }
}

```

`listview.xml`:
```xml
<?xml version="1.0" encoding="utf-8"?>
<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:padding="16dp"
    tools:ignore="MissingDefaultResource">

    <ImageView
        android:id="@+id/img"
        android:layout_width="120dp"
        android:layout_height="90dp"
        android:layout_centerVertical="true" />

    <LinearLayout
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_centerVertical="true"
        android:layout_marginLeft="10dp"
        android:layout_toRightOf="@+id/img"
        android:orientation="vertical">


        <TextView
            android:id="@+id/title"
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:text="味妙烤鱼吧"
            android:textColor="@color/black"
            android:textSize="20sp" />

        <LinearLayout
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:orientation="horizontal">

            <TextView
                android:id="@+id/lv_price"
                android:layout_width="wrap_content"
                android:layout_height="wrap_content"
                android:text="价格"
                android:textSize="20sp" />

            <TextView
                android:id="@+id/price"
                android:layout_width="wrap_content"
                android:layout_height="wrap_content"
                android:layout_marginLeft="5dp"
                android:layout_toRightOf="@+id/lv_price"
                android:text="1000"
                android:textSize="20sp" />

            <TextView
                android:id="@+id/Buy"
                android:layout_width="wrap_content"
                android:layout_height="wrap_content"
                android:layout_marginLeft="10dp"
                android:text="团购数"
                android:textSize="20sp" />

            <TextView
                android:id="@+id/BuyPrice"
                android:layout_width="wrap_content"
                android:layout_height="wrap_content"
                android:layout_marginLeft="5dp"
                android:layout_toRightOf="@+id/Buy"
                android:text="233"
                android:textSize="20sp" />

        </LinearLayout>
    </LinearLayout>
</RelativeLayout>
```


`activity_main.xml`:
```xml
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical">

    <TextView
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:background="#FF8806"
        android:gravity="center"
        android:paddingTop="10dp"
        android:paddingBottom="10dp"
        android:text="美食团购"
        android:textColor="@color/white"
        android:textSize="20dp"
        android:textStyle="bold" />

    <ListView
        android:id="@+id/lv"
        android:layout_width="match_parent"
        android:layout_height="match_parent" />
</LinearLayout>
```