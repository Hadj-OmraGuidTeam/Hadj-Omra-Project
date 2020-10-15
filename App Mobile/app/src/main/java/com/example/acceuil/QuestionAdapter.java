package com.example.acceuil;

import android.app.Activity;
import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.widget.ArrayAdapter;
import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;

import java.util.ArrayList;

import retrofit2.Callback;


public class QuestionAdapter extends ArrayAdapter<String> {
    ArrayList<String> names;
    ArrayList<String> comments;
    ArrayList<Integer> likes ;
    Callback<com.example.acceuil.ConnectedUseData> context;
    public QuestionAdapter(@NonNull Callback<com.example.acceuil.ConnectedUseData> context, ArrayList<String> names, ArrayList<String> comments) {
        super((Context) context, R.layout.question,names);
        this.likes=likes;
        this.context  =context;
        this.names=names;
        this.comments=comments;


    }




    @NonNull
    @Override
    public View getView(int position, @Nullable View view,@NonNull ViewGroup parent)  {
        String ques=getItem(position) ;

        //TextView holder=convertView.findViewById(R.id.comment);
        LayoutInflater inflater = (LayoutInflater) context;
        //LayoutInflater inflater=(LayoutInflater)context.getLayoutInflater();
        View convertView=inflater.inflate(R.layout.question,null,true);
        TextView name=(TextView)convertView.findViewById(R.id.user);
        TextView like=(TextView) convertView.findViewById(R.id.likes) ;
        TextView coment=(TextView) convertView.findViewById(R.id.comment) ;
        like.setText(String.valueOf(likes.get(position)));

        name.setText(names.get(position));
        coment.setText(comments.get(position));
        return convertView;

    }
}
