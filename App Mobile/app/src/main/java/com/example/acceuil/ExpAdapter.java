package com.example.acceuil;


import android.content.Context;
import android.graphics.Typeface;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.BaseExpandableListAdapter;
import android.widget.TextView;

import java.util.HashMap;
import java.util.List;
import com.example.acceuil.R.layout;


public class ExpAdapter extends BaseExpandableListAdapter {
    private Context context;
    private List<String> ListDataheader;
    private HashMap<String,List<String>> listHashMap;

    public ExpAdapter(Context context, List<String> listDataheader, HashMap<String, List<String>> listHashMap) {
        this.context = context;
        ListDataheader = listDataheader;
        this.listHashMap = listHashMap;
    }

    @Override
    public int getGroupCount()
    {
        return ListDataheader.size();
    }

    @Override
    public int getChildrenCount(int i)
    {
        return listHashMap.get(ListDataheader.get(i)).size();
    }

    @Override
    public Object getGroup(int i) {

        return ListDataheader.get(i);
    }

    @Override
    public Object getChild(int i, int i1) {

        return listHashMap.get(ListDataheader.get(i)).get(i1);//i jroupe itemm ; i1fils item
    }

    @Override
    public long getGroupId(int i)
    {
        return i;
    }

    @Override
    public long getChildId(int i, int i1) {
        return i1;
    }

    @Override
    public boolean hasStableIds() {
        return false;
    }

    @Override
    public View getGroupView(int i, boolean b, View view, ViewGroup viewGroup) {
        String headerTitle = (String) getGroup(i) ;
        if (view == null)
        {
            LayoutInflater inflater = (LayoutInflater)this.context.getSystemService(Context.LAYOUT_INFLATER_SERVICE);
            view = inflater.inflate(layout.jroupe,null);
        }
        TextView IvListheaderr= (TextView)view.findViewById(R.id.IvListheader);
        IvListheaderr.setTypeface(null, Typeface.BOLD);
        IvListheaderr.setText(headerTitle);
        return view;
    }

    @Override
    public View getChildView(int i, int i1, boolean b, View view, ViewGroup viewGroup) {
        final String childText = (String) getChild(i,i1);
        if(view == null){
            LayoutInflater infalInflater = (LayoutInflater) this.context.getSystemService(Context.LAYOUT_INFLATER_SERVICE);
            view = infalInflater.inflate(R.layout.item,null);
        }
        TextView txtListChild = (TextView) view.findViewById(R.id.IvListitem);
        txtListChild.setText(childText);
        return view;
    }

    @Override
    public boolean isChildSelectable(int i, int i1) {
        return true;
    }
}

