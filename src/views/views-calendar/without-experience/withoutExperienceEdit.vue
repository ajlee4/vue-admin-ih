<template>
	<el-form :label-position="labelPosition" label-width="100px">
		<el-tabs type="card">
			<el-tab-pane label="Ресурс">
				<div style="margin: 20px;"></div>

				<el-row>
					<el-col :span="12">
						<el-form-item
							label="Имя"
							:class="{
								'is-error': $v.data.name.$dirty && !$v.data.name.required,
							}"
						>
							<el-input v-model="data.name"></el-input>
							<small
								v-if="$v.data.name.$dirty && !$v.data.name.required"
								class="error-text"
								>Поле "Имя" не должно быть пустым</small
							>
						</el-form-item>
					</el-col>
					<el-col :span="12">
						<el-form-item label="Фамилия">
							<el-input v-model="data.surname"></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="12">
						<el-form-item label="Телефон">
							<el-input v-model="data.phone"></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="12">
						<el-form-item label="Email">
							<el-input v-model="data.email"></el-input>
						</el-form-item>
					</el-col>

					<el-col :span="12">
						<el-form-item label="Дата рождения">
							<el-date-picker
								class="date-picker"
								v-model="data.birth_date"
								range-separator="|"
								type="date"
								placeholder="Дата рождения"
								format="dd-MM-yyyy"
							>
							</el-date-picker>
						</el-form-item>
					</el-col>
				</el-row>
			</el-tab-pane>
		</el-tabs>
		<el-button type="success" class="succes-btn" @click="handleAddReviews(data.id)"
			>Изменить</el-button
		>
	</el-form>
</template>

<script>
import { fetchWithoutExperience, updateWithoutExperience } from '@/api/withoutExperience';
import { required } from 'vuelidate/lib/validators';
import { Message } from 'element-ui';
export default {
	validations: {
		data: {
			name: { required },
		},
	},
	data() {
		return {
			data: {
				name: '',
			},
			activeName: 'first',
			labelPosition: 'top',
			dialogImageUrl: '',
			dialogVisible: false,
			news: {
				title: '',
				slug: '',
				description: '',
			},
		};
	},
	created() {
		this.getData();
	},
	methods: {
		handlePictureCardPreview(file) {
			this.dialogImageUrl = file.url;
			this.dialogVisible = true;
		},
		handleAddReviews(id) {
			if (this.$v.$invalid) {
				Message({
					message: 'Заполните обязательные поля',
					type: 'error',
					showClose: true,
				});
				this.$v.$touch();
				return;
			}
			updateWithoutExperience(id, this.data).then(() => {
				this.$router.push({ name: 'without-experience' });
				this.$message({
					type: 'success',
					message: 'Данные изменены',
					showClose: true,
				});
			});
		},
		getData() {
			fetchWithoutExperience(this.$route.params.id).then((res) => {
				console.log(res);
				this.data = res.data;
			});
		},
	},
};
</script>
<style lang="scss">
.el-row {
	margin-bottom: 20px;
	&:last-child {
		margin-bottom: 0;
	}
}
.el-col {
	border-radius: 4px;
	padding-left: 10px;
	padding-right: 10px;
}
.el-tabs__content {
	overflow: visible;
}
.succes-btn {
	margin-top: 25px;
}
</style>
