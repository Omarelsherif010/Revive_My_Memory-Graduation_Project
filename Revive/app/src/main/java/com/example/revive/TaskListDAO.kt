package com.example.revive

import androidx.room.Dao
import androidx.room.Insert
import androidx.room.Query


@Dao
interface TaskListDAO {
    @Query("SELECT * from taskdata")
    fun getAll(): List<TaskDataEntity>

    @Insert
    fun insert(toDoListData: TaskDataEntity) : Long

    @Query("UPDATE taskdata  SET title = :title, date =:date, time = :time  where id LIKE :id")
    fun update(
        title: String,
        date: String,
        time: String,
        id: Long
    )

    @Query("DELETE From taskdata where id = :id")
    fun Delete(id : Long)

    @Query("UPDATE taskdata Set isShow = :isShow  where id LIKE :id")
    fun isShownUpdate(id:Long , isShow : Int)

    @Query("SELECT * from taskdata where id Like :id")
    fun get(id : Long): TaskDataEntity
}