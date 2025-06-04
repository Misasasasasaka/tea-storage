<template>
  <el-card>
    <div class="toolbar">
      <el-input v-model="keyword" placeholder="关键词…" style="width:200px" />
      <el-select v-model="category" placeholder="分类" clearable>
        <el-option v-for="c in dict" :key="c" :label="c" :value="c" />
      </el-select>
      <el-button type="primary" @click="load">查询</el-button>
      <el-button @click="openEdit()">新增</el-button>
    </div>

    <el-table :data="list" stripe height="600">
      <el-table-column prop="code" label="货号" />
      <el-table-column prop="nameCN" label="名称" />
      <el-table-column prop="category" label="分类" />
      <el-table-column prop="grade" label="等级" />
      <el-table-column prop="originProvince" label="产地" />
      <el-table-column label="图片">
        <template #default="{ row }">
          <img :src="row.imageUrl" style="width:40px;height:40px" />
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作">
        <template #default="{ row }">
          <el-button link @click="openEdit(row)">编辑</el-button>
          <el-button link type="danger" @click="delTea(row.id)">删</el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import api from '../../api/axios';

const list = ref<any[]>([]);
const dict = ['GREEN', 'BLACK', 'OOLONG', 'WHITE', 'DARK', 'YELLOW', 'HERBAL'];
const keyword = ref('');
const category = ref('');

const load = async () => {
  const res = await api.get('/teas', { params: { keyword: keyword.value, category: category.value } });
  list.value = res.data.data;
};

const delTea = async (id: number) => {
  await api.delete(`/teas/${id}`);
  load();
};

const openEdit = (_row?: any) => {
  alert('TODO: open form');
};

load();
</script>
