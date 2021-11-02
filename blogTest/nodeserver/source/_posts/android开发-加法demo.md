title: 'android开发,加法demo'
author: IceStone
tags:
  - android
  - ''
categories:
  - android
abbrlink: 40912
date: 2021-10-10 15:24:00
---
> 前言:写错了思路,没按照老师的要求写,但是可以用
> ps:文章排版可能会出错,毕竟是用别人的框架
> ps:用的时候记着改一下包名

`MainActivity.java`:
```java
package com.example.calculate;

import androidx.appcompat.app.AlertDialog;
import androidx.appcompat.app.AppCompatActivity;

import android.annotation.SuppressLint;
import android.content.DialogInterface;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity implements View.OnClickListener {

    //    创建对象，此时还是空的
    Button SubmitButton;
    //    随机数计算的按钮
    Button random;
    //    创建第一，二个数字的空对象
    EditText num1, num2;
    //        给数据并核算的两个数字id：
    TextView num3, num4;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        SubmitButton = findViewById(R.id.submitButton);
//        一键生成随机数
        random = findViewById(R.id.randomNum);
        SubmitButton.setOnClickListener(this);
        random.setOnClickListener(new mClick());
        num1 = findViewById(R.id.firstNum);
        num2 = findViewById(R.id.secondNum);
    }

    //自定义方法
    class mClick implements View.OnClickListener {
        public void onClick(View v) {
//生成随机数：
            int num1 = (int) ((Math.random() * 100));
            int num2 = (int) ((Math.random() * 100));
            //            弹出对话框
//        生命对象
            AlertDialog dialog;
            AlertDialog.Builder builder;
            builder = new AlertDialog.Builder(MainActivity.this)
                    .setTitle("相加的计算结果")
                    .setIcon(R.mipmap.ic_launcher)
                    .setMessage(num1 + " + " + num2 + " = " + (num1 + num2))
                    .setPositiveButton("确定", new DialogInterface.OnClickListener() {
                        @Override
                        public void onClick(DialogInterface dialog, int which) {
                            dialog.dismiss();//关闭对话框
                            MainActivity.this.finish();//关闭MainActivity
                        }
                    })
                    .setNegativeButton("取消", new DialogInterface.OnClickListener() {
                        @Override
                        public void onClick(DialogInterface dialog, int which) {
                            dialog.dismiss();
                        }
                    });
            dialog = builder.create();
            dialog.show();

        }
    }

    @Override
    public void onClick(View view) {
/*        AlertDialog.Builder builder = new AlertDialog.Builder(this);
        builder.setTitle("test标题");
        builder.setIcon(R.drawable.ic_launcher_background);
        builder.setMessage("测试对话框弹出文字");
        builder.setCancelable(true);*/


//获取输入的数据
        int one = Integer.parseInt(num1.getText().toString());
        int two = Integer.parseInt(num2.getText().toString());


        //            弹出对话框
//        生命对象
        AlertDialog dialog;
        AlertDialog.Builder builder;
        builder = new AlertDialog.Builder(MainActivity.this)
                .setTitle("相加的计算结果")
                .setIcon(R.mipmap.ic_launcher)
                .setMessage(one + " + " + two + " = " + (one + two))
                .setPositiveButton("确定", new DialogInterface.OnClickListener() {
                    @Override
                    public void onClick(DialogInterface dialog, int which) {
                        dialog.dismiss();//关闭对话框
                        MainActivity.this.finish();//关闭MainActivity
                    }
                })
                .setNegativeButton("取消", new DialogInterface.OnClickListener() {
                    @Override
                    public void onClick(DialogInterface dialog, int which) {
                        dialog.dismiss();
                    }
                });
        dialog = builder.create();
        dialog.show();
    }
}
```


`activity_main.xml`:
```xml
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical"
    tools:context=".MainActivity">

    <LinearLayout
        android:layout_width="match_parent"
        android:layout_height="wrap_content">

        <TextView
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:text="两数字相加，自己输入的版本"></TextView>
    </LinearLayout>

    <LinearLayout
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:orientation="horizontal">


        <TextView
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:text="请输入数字"
            android:textColor="@color/black" />

        <EditText
            android:id="@+id/firstNum"
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:hint="请输入第一个数字" />
    </LinearLayout>

    <LinearLayout
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:orientation="horizontal">

        <TextView
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:text="请输入数字"
            android:textColor="@color/black" />

        <EditText
            android:id="@+id/secondNum"
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:hint="请输入第二个数字" />
    </LinearLayout>

    <Button
        android:id="@+id/submitButton"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:background="#ECD4D4"
        android:text="提交数据" />

    <LinearLayout
        android:layout_width="match_parent"
        android:layout_height="wrap_content">

        <Button
            android:id="@+id/randomNum"
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:text="两个数相加，随机数版本的按钮"></Button>
    </LinearLayout>
</LinearLayout>
```

> 说明:
两个版本,上面的是输入数字点 提交数据 跳出结果



![upload successful](/images/pasted-18.png)


下面是自己在后台出现随机数,点击出现弹窗