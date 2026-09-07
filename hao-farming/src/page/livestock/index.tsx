import React, { useState, useMemo, useRef } from 'react';
import { AgGridReact } from 'ag-grid-react';
import type { ColDef } from 'ag-grid-community';
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community';
import { Button, Modal, Form, Input, InputNumber, Select, message, Space, Popconfirm } from 'antd';
import { EditOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import './index.scss';

ModuleRegistry.registerModules([AllCommunityModule]);

interface LivestockData {
    id: number;
    name: string;
    type: string;
    age: number;
    weight: number;
    healthStatus: string;
    location: string;
    entryDate: string;
}

const LiveStock: React.FC = () => {
    const gridRef = useRef<AgGridReact>(null);
    const [rowData, setRowData] = useState<LivestockData[]>([
        {
            id: 1,
            name: '牛001',
            type: '奶牛',
            age: 3,
            weight: 450,
            healthStatus: '健康',
            location: 'A区-01',
            entryDate: '2023-01-15'
        },
        {
            id: 2,
            name: '牛002',
            type: '肉牛',
            age: 2,
            weight: 380,
            healthStatus: '健康',
            location: 'A区-02',
            entryDate: '2023-03-20'
        },
        {
            id: 3,
            name: '羊001',
            type: '绵羊',
            age: 1,
            weight: 65,
            healthStatus: '观察中',
            location: 'B区-01',
            entryDate: '2023-06-10'
        },
        {
            id: 4,
            name: '猪001',
            type: '生猪',
            age: 0.5,
            weight: 80,
            healthStatus: '健康',
            location: 'C区-01',
            entryDate: '2023-09-05'
        },
        {
            id: 5,
            name: '牛003',
            type: '奶牛',
            age: 4,
            weight: 520,
            healthStatus: '治疗中',
            location: 'A区-03',
            entryDate: '2022-11-20'
        }
    ]);

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [editingRecord, setEditingRecord] = useState<LivestockData | null>(null);
    const [form] = Form.useForm();

    const columnDefs = useMemo<ColDef<LivestockData>[]>(() => [
        {
            headerName: '编号',
            field: 'id',
            width: 80,
            sortable: true,
            filter: true
        },
        {
            headerName: '名称',
            field: 'name',
            width: 120,
            sortable: true,
            filter: true
        },
        {
            headerName: '类型',
            field: 'type',
            width: 100,
            sortable: true,
            filter: true,
            cellStyle: (params) => {
                const colors: Record<string, string> = {
                    '奶牛': '#e6f7ff',
                    '肉牛': '#f6ffed',
                    '绵羊': '#fff7e6',
                    '生猪': '#f9f0ff'
                };
                return {
                    backgroundColor: colors[params.value] || '#fafafa',
                    display: 'flex',
                    alignItems: 'center'
                };
            }
        },
        {
            headerName: '年龄(年)',
            field: 'age',
            width: 100,
            sortable: true,
            valueFormatter: (params) => `${params.value} 年`
        },
        {
            headerName: '体重(kg)',
            field: 'weight',
            width: 110,
            sortable: true,
            valueFormatter: (params) => `${params.value} kg`
        },
        {
            headerName: '健康状态',
            field: 'healthStatus',
            width: 110,
            sortable: true,
            filter: true,
            cellRenderer: (params: any) => {
                const statusColors: Record<string, string> = {
                    '健康': '#52c41a',
                    '观察中': '#faad14',
                    '治疗中': '#ff4d4f'
                };
                return (
                    <span style={{
                        color: statusColors[params.value] || '#666',
                        fontWeight: 'bold'
                    }}>
                        {params.value}
                    </span>
                );
            }
        },
        {
            headerName: '位置',
            field: 'location',
            width: 110,
            sortable: true,
            filter: true
        },
        {
            headerName: '入场日期',
            field: 'entryDate',
            width: 120,
            sortable: true,
            filter: true
        },
        {
            headerName: '操作',
            width: 150,
            cellRenderer: (params: any) => (
                <Space>
                    <Button
                        type="link"
                        icon={<EditOutlined />}
                        onClick={() => handleEdit(params.data)}
                    >
                        编辑
                    </Button>
                    <Popconfirm
                        title="确定删除吗？"
                        onConfirm={() => handleDelete(params.data.id)}
                        okText="确定"
                        cancelText="取消"
                    >
                        <Button type="link" danger icon={<DeleteOutlined />}>
                            删除
                        </Button>
                    </Popconfirm>
                </Space>
            )
        }
    ], []);

    const defaultColDef = useMemo<ColDef>(() => ({
        resizable: true,
        flex: 1,
        minWidth: 100
    }), []);

    const handleAdd = () => {
        setEditingRecord(null);
        form.resetFields();
        setIsModalVisible(true);
    };

    const handleEdit = (record: LivestockData) => {
        setEditingRecord(record);
        form.setFieldsValue(record);
        setIsModalVisible(true);
    };

    const handleDelete = (id: number) => {
        setRowData(rowData.filter(item => item.id !== id));
        message.success('删除成功');
    };

    const handleModalOk = () => {
        form.validateFields().then((values) => {
            if (editingRecord) {
                // 编辑
                setRowData(rowData.map(item =>
                    item.id === editingRecord.id ? { ...item, ...values } : item
                ));
                message.success('更新成功');
            } else {
                // 新增
                const newId = Math.max(...rowData.map(item => item.id), 0) + 1;
                const newData: LivestockData = {
                    id: newId,
                    ...values,
                    entryDate: new Date().toISOString().split('T')[0]
                };
                setRowData([...rowData, newData]);
                message.success('添加成功');
            }
            setIsModalVisible(false);
            form.resetFields();
        });
    };

    const handleModalCancel = () => {
        setIsModalVisible(false);
        form.resetFields();
    };

    return (
        <div className="livestock-page">
            <div className="toolbar">
                <Button
                    type="primary"
                    icon={<PlusOutlined />}
                    onClick={handleAdd}
                >
                    新增牲畜
                </Button>
            </div>

            <div className="ag-theme-quartz grid-container">
                <AgGridReact
                    ref={gridRef}
                    rowData={rowData}
                    columnDefs={columnDefs}
                    defaultColDef={defaultColDef}
                    pagination={true}
                    paginationPageSize={10}
                    rowSelection="single"
                    animateRows={true}
                    domLayout="autoHeight"
                />
            </div>

            <Modal
                title={editingRecord ? '编辑牲畜信息' : '新增牲畜信息'}
                open={isModalVisible}
                onOk={handleModalOk}
                onCancel={handleModalCancel}
                width={600}
            >
                <Form
                    form={form}
                    layout="vertical"
                    autoComplete="off"
                >
                    <Form.Item
                        label="名称"
                        name="name"
                        rules={[{ required: true, message: '请输入名称' }]}
                    >
                        <Input placeholder="例如：牛001" />
                    </Form.Item>

                    <Form.Item
                        label="类型"
                        name="type"
                        rules={[{ required: true, message: '请选择类型' }]}
                    >
                        <Select placeholder="请选择类型">
                            <Select.Option value="奶牛">奶牛</Select.Option>
                            <Select.Option value="肉牛">肉牛</Select.Option>
                            <Select.Option value="绵羊">绵羊</Select.Option>
                            <Select.Option value="生猪">生猪</Select.Option>
                        </Select>
                    </Form.Item>

                    <Form.Item
                        label="年龄(年)"
                        name="age"
                        rules={[{ required: true, message: '请输入年龄' }]}
                    >
                        <InputNumber
                            min={0}
                            max={30}
                            step={0.5}
                            style={{ width: '100%' }}
                            placeholder="请输入年龄"
                        />
                    </Form.Item>

                    <Form.Item
                        label="体重(kg)"
                        name="weight"
                        rules={[{ required: true, message: '请输入体重' }]}
                    >
                        <InputNumber
                            min={0}
                            max={2000}
                            style={{ width: '100%' }}
                            placeholder="请输入体重"
                        />
                    </Form.Item>

                    <Form.Item
                        label="健康状态"
                        name="healthStatus"
                        rules={[{ required: true, message: '请选择健康状态' }]}
                    >
                        <Select placeholder="请选择健康状态">
                            <Select.Option value="健康">健康</Select.Option>
                            <Select.Option value="观察中">观察中</Select.Option>
                            <Select.Option value="治疗中">治疗中</Select.Option>
                        </Select>
                    </Form.Item>

                    <Form.Item
                        label="位置"
                        name="location"
                        rules={[{ required: true, message: '请输入位置' }]}
                    >
                        <Input placeholder="例如：A区-01" />
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
};

export default LiveStock;

