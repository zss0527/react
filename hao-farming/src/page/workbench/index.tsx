import React from 'react';
import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts';
import { Card, Row, Col, Statistic } from 'antd';
import { FireOutlined, CloudOutlined, ShoppingOutlined } from '@ant-design/icons';
import './index.scss';


const WorkBench: React.FC = () => {
    // 温度趋势图
    const temperatureOption = {
        title: {
            text: '温度趋势',
            left: 'center',
            textStyle: {
                color: '#333',
                fontSize: 16,
                fontWeight: 'bold'
            }
        },
        tooltip: {
            trigger: 'axis',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            borderColor: '#ff7875',
            borderWidth: 1,
            textStyle: {
                color: '#333'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00', '24:00'],
            axisLine: {
                lineStyle: {
                    color: '#d9d9d9'
                }
            },
            axisLabel: {
                color: '#666'
            }
        },
        yAxis: {
            type: 'value',
            name: '°C',
            axisLine: {
                lineStyle: {
                    color: '#d9d9d9'
                }
            },
            axisLabel: {
                color: '#666'
            },
            splitLine: {
                lineStyle: {
                    color: '#f0f0f0'
                }
            }
        },
        series: [
            {
                name: '温度',
                type: 'line',
                smooth: true,
                symbol: 'circle',
                symbolSize: 8,
                itemStyle: {
                    color: '#ff4d4f'
                },
                lineStyle: {
                    width: 3,
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                        { offset: 0, color: '#ff7875' },
                        { offset: 1, color: '#ff4d4f' }
                    ])
                },
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: 'rgba(255, 77, 79, 0.3)' },
                        { offset: 1, color: 'rgba(255, 77, 79, 0.05)' }
                    ])
                },
                data: [18, 17, 19, 24, 26, 23, 20]
            }
        ]
    };

    // 湿度趋势图
    const humidityOption = {
        title: {
            text: '湿度趋势',
            left: 'center',
            textStyle: {
                color: '#333',
                fontSize: 16,
                fontWeight: 'bold'
            }
        },
        tooltip: {
            trigger: 'axis',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            borderColor: '#69c0ff',
            borderWidth: 1,
            textStyle: {
                color: '#333'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00', '24:00'],
            axisLine: {
                lineStyle: {
                    color: '#d9d9d9'
                }
            },
            axisLabel: {
                color: '#666'
            }
        },
        yAxis: {
            type: 'value',
            name: '%',
            axisLine: {
                lineStyle: {
                    color: '#d9d9d9'
                }
            },
            axisLabel: {
                color: '#666'
            },
            splitLine: {
                lineStyle: {
                    color: '#f0f0f0'
                }
            }
        },
        series: [
            {
                name: '湿度',
                type: 'line',
                smooth: true,
                symbol: 'circle',
                symbolSize: 8,
                itemStyle: {
                    color: '#1890ff'
                },
                lineStyle: {
                    width: 3,
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                        { offset: 0, color: '#69c0ff' },
                        { offset: 1, color: '#1890ff' }
                    ])
                },
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: 'rgba(24, 144, 255, 0.3)' },
                        { offset: 1, color: 'rgba(24, 144, 255, 0.05)' }
                    ])
                },
                data: [65, 68, 70, 62, 58, 63, 67]
            }
        ]
    };

    // 二氧化碳浓度图
    const co2Option = {
        title: {
            text: 'CO₂ 浓度',
            left: 'center',
            textStyle: {
                color: '#333',
                fontSize: 16,
                fontWeight: 'bold'
            }
        },
        tooltip: {
            trigger: 'axis',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            borderColor: '#95de64',
            borderWidth: 1,
            textStyle: {
                color: '#333'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00', '24:00'],
            axisLine: {
                lineStyle: {
                    color: '#d9d9d9'
                }
            },
            axisLabel: {
                color: '#666'
            }
        },
        yAxis: {
            type: 'value',
            name: 'ppm',
            axisLine: {
                lineStyle: {
                    color: '#d9d9d9'
                }
            },
            axisLabel: {
                color: '#666'
            },
            splitLine: {
                lineStyle: {
                    color: '#f0f0f0'
                }
            }
        },
        series: [
            {
                name: 'CO₂',
                type: 'line',
                smooth: true,
                symbol: 'circle',
                symbolSize: 8,
                itemStyle: {
                    color: '#52c41a'
                },
                lineStyle: {
                    width: 3,
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                        { offset: 0, color: '#95de64' },
                        { offset: 1, color: '#52c41a' }
                    ])
                },
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: 'rgba(82, 196, 26, 0.3)' },
                        { offset: 1, color: 'rgba(82, 196, 26, 0.05)' }
                    ])
                },
                data: [420, 450, 480, 520, 550, 500, 460]
            }
        ]
    };

    // 饲料进食量柱状图
    const feedOption = {
        title: {
            text: '最近7天饲料进食量',
            left: 'center',
            textStyle: {
                color: '#333',
                fontSize: 16,
                fontWeight: 'bold'
            }
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            },
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            borderColor: '#ffd666',
            borderWidth: 1,
            textStyle: {
                color: '#333'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
            axisLine: {
                lineStyle: {
                    color: '#d9d9d9'
                }
            },
            axisLabel: {
                color: '#666'
            }
        },
        yAxis: {
            type: 'value',
            name: 'kg',
            axisLine: {
                lineStyle: {
                    color: '#d9d9d9'
                }
            },
            axisLabel: {
                color: '#666'
            },
            splitLine: {
                lineStyle: {
                    color: '#f0f0f0'
                }
            }
        },
        series: [
            {
                name: '进食量',
                type: 'bar',
                barWidth: '50%',
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: '#ffd666' },
                        { offset: 1, color: '#faad14' }
                    ]),
                    borderRadius: [8, 8, 0, 0]
                },
                emphasis: {
                    itemStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            { offset: 0, color: '#ffe58f' },
                            { offset: 1, color: '#ffc53d' }
                        ])
                    }
                },
                data: [320, 332, 301, 334, 390, 330, 320]
            }
        ]
    };

    // 环境综合指标雷达图
    const radarOption = {
        title: {
            text: '环境综合指标',
            left: 'center',
            textStyle: {
                color: '#333',
                fontSize: 16,
                fontWeight: 'bold'
            }
        },
        tooltip: {
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            borderColor: '#b37feb',
            borderWidth: 1,
            textStyle: {
                color: '#333'
            }
        },
        radar: {
            indicator: [
                { name: '温度', max: 100 },
                { name: '湿度', max: 100 },
                { name: 'CO₂', max: 100 },
                { name: '光照', max: 100 },
                { name: '通风', max: 100 },
                { name: '清洁度', max: 100 }
            ],
            shape: 'polygon',
            splitNumber: 4,
            axisName: {
                color: '#666'
            },
            splitLine: {
                lineStyle: {
                    color: '#e8e8e8'
                }
            },
            splitArea: {
                show: true,
                areaStyle: {
                    color: ['rgba(179, 127, 235, 0.05)', 'rgba(179, 127, 235, 0.1)']
                }
            }
        },
        series: [
            {
                name: '环境指标',
                type: 'radar',
                data: [
                    {
                        value: [85, 78, 82, 90, 88, 92],
                        name: '当前状态',
                        itemStyle: {
                            color: '#b37feb'
                        },
                        areaStyle: {
                            color: 'rgba(179, 127, 235, 0.3)'
                        },
                        lineStyle: {
                            width: 2
                        }
                    }
                ]
            }
        ]
    };

    // 饮水统计图
    const waterOption = {
        title: {
            text: '今日饮水量统计',
            left: 'center',
            textStyle: {
                color: '#333',
                fontSize: 16,
                fontWeight: 'bold'
            }
        },
        tooltip: {
            trigger: 'axis',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            borderColor: '#5cdbd3',
            borderWidth: 1,
            textStyle: {
                color: '#333'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: ['0-4h', '4-8h', '8-12h', '12-16h', '16-20h', '20-24h'],
            axisLine: {
                lineStyle: {
                    color: '#d9d9d9'
                }
            },
            axisLabel: {
                color: '#666'
            }
        },
        yAxis: {
            type: 'value',
            name: 'L',
            axisLine: {
                lineStyle: {
                    color: '#d9d9d9'
                }
            },
            axisLabel: {
                color: '#666'
            },
            splitLine: {
                lineStyle: {
                    color: '#f0f0f0'
                }
            }
        },
        series: [
            {
                name: '饮水量',
                type: 'bar',
                barWidth: '50%',
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: '#5cdbd3' },
                        { offset: 1, color: '#13c2c2' }
                    ]),
                    borderRadius: [8, 8, 0, 0]
                },
                emphasis: {
                    itemStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            { offset: 0, color: '#87e8de' },
                            { offset: 1, color: '#36cfc9' }
                        ])
                    }
                },
                data: [120, 200, 350, 420, 380, 250]
            }
        ]
    };

    return (
        <div className="workbench">
            {/* 第一排：统计卡片 */}
            <Row gutter={[16, 16]} style={{ marginBottom: 16 }}>
                <Col xs={24} sm={12} lg={6}>
                    <Card className="stat-card temperature-card">
                        <Statistic
                            title="当前温度"
                            value={24.5}
                            precision={1}
                            suffix="°C"
                            prefix={<FireOutlined />}
                            valueStyle={{ color: '#ff4d4f' }}
                        />
                    </Card>
                </Col>
                <Col xs={24} sm={12} lg={6}>
                    <Card className="stat-card humidity-card">
                        <Statistic
                            title="当前湿度"
                            value={65}
                            suffix="%"
                            prefix={<CloudOutlined />}
                            valueStyle={{ color: '#1890ff' }}
                        />
                    </Card>
                </Col>
                <Col xs={24} sm={12} lg={6}>
                    <Card className="stat-card co2-card">
                        <Statistic
                            title="CO₂ 浓度"
                            value={520}
                            suffix="ppm"
                            prefix={<CloudOutlined />}
                            valueStyle={{ color: '#52c41a' }}
                        />
                    </Card>
                </Col>
                <Col xs={24} sm={12} lg={6}>
                    <Card className="stat-card feed-card">
                        <Statistic
                            title="今日进食量"
                            value={320}
                            suffix="kg"
                            prefix={<ShoppingOutlined />}
                            valueStyle={{ color: '#faad14' }}
                        />
                    </Card>
                </Col>
            </Row>

            {/* 第二排：图表 */}
            <Row gutter={[16, 16]} style={{ marginBottom: 16 }}>
                <Col xs={24} lg={12}>
                    <Card className="chart-card">
                        <ReactECharts option={temperatureOption} style={{ height: 300 }} />
                    </Card>
                </Col>
                <Col xs={24} lg={12}>
                    <Card className="chart-card">
                        <ReactECharts option={humidityOption} style={{ height: 300 }} />
                    </Card>
                </Col>
            </Row>

            {/* 第三排：图表 */}
            <Row gutter={[16, 16]} style={{ marginBottom: 16 }}>
                <Col xs={24} lg={12}>
                    <Card className="chart-card">
                        <ReactECharts option={co2Option} style={{ height: 300 }} />
                    </Card>
                </Col>
                <Col xs={24} lg={12}>
                    <Card className="chart-card">
                        <ReactECharts option={feedOption} style={{ height: 300 }} />
                    </Card>
                </Col>
            </Row>

            {/* 第四排：图表 */}
            <Row gutter={[16, 16]}>
                <Col xs={24} lg={12}>
                    <Card className="chart-card">
                        <ReactECharts option={radarOption} style={{ height: 300 }} />
                    </Card>
                </Col>
                <Col xs={24} lg={12}>
                    <Card className="chart-card">
                        <ReactECharts option={waterOption} style={{ height: 300 }} />
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default WorkBench;

