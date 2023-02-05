package com.example.revive

import android.content.Context
import androidx.room.Database
import androidx.room.Room
import androidx.room.RoomDatabase



@Database(entities = arrayOf(TaskDataEntity::class), version = 1 )
abstract class TaskListDatabase : RoomDatabase(){

    abstract fun toDoListDao() : TaskListDAO

    /* Singleton */

    companion object{
        @Volatile
        private var instance : TaskListDatabase? = null

        fun getInstance(context: Context): TaskListDatabase? {
            if (instance == null) {
                synchronized(TaskListDatabase::class) {
                    instance = Room.databaseBuilder(context.applicationContext,
                        TaskListDatabase::class.java,
                        "taskdb")
                        .allowMainThreadQueries()
                        .build()
                }
            }
            return instance
        }

        /* Singleton close*/
    }

}