(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
	['chunk-2d0d2b5d'],
	{
		'5a50': function(e, t, a) {
			'use strict';
			a.r(t);
			var l = function() {
					var e = this,
						t = e.$createElement,
						a = e._self._c || t;
					return a('div', [a('Table')], 1);
				},
				s = [],
				r = function() {
					var e = this,
						t = e.$createElement,
						a = e._self._c || t;
					return a(
						'div',
						[
							a(
								'el-row',
								[
									a(
										'el-table',
										{
											staticStyle: { width: '100%' },
											attrs: { data: e.tableData },
										},
										[
											a('el-table-column', {
												attrs: {
													prop: 'date',
													label: 'Date',
													width: '180',
												},
											}),
											a('el-table-column', {
												attrs: {
													prop: 'name',
													label: 'Name',
													width: '180',
												},
											}),
											a('el-table-column', {
												attrs: { prop: 'address', label: 'Address' },
											}),
										],
										1,
									),
								],
								1,
							),
							a(
								'el-row',
								[
									a(
										'el-table',
										{
											staticStyle: { width: '100%' },
											attrs: { data: e.tableData, border: '' },
										},
										[
											a('el-table-column', {
												attrs: {
													prop: 'date',
													label: 'Date',
													width: '180',
												},
											}),
											a('el-table-column', {
												attrs: {
													prop: 'name',
													label: 'Name',
													width: '180',
												},
											}),
											a('el-table-column', {
												attrs: { prop: 'address', label: 'Address' },
											}),
										],
										1,
									),
								],
								1,
							),
						],
						1,
					);
				},
				o = [],
				n = {
					data: function() {
						return {
							tableData: [
								{
									date: '2016-05-03',
									name: 'Tom',
									address: 'No. 189, Grove St, Los Angeles',
								},
								{
									date: '2016-05-02',
									name: 'Tom',
									address: 'No. 189, Grove St, Los Angeles',
								},
								{
									date: '2016-05-04',
									name: 'Tom',
									address: 'No. 189, Grove St, Los Angeles',
								},
								{
									date: '2016-05-01',
									name: 'Tom',
									address: 'No. 189, Grove St, Los Angeles',
								},
							],
						};
					},
				},
				d = n,
				b = a('2877'),
				c = Object(b['a'])(d, r, o, !1, null, null, null),
				u = c.exports,
				m = { components: { Table: u } },
				p = m,
				i = Object(b['a'])(p, l, s, !1, null, null, null);
			t['default'] = i.exports;
		},
	},
]);
//# sourceMappingURL=chunk-2d0d2b5d.bfda5f3d.js.map
