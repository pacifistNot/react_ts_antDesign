import React from "react";
import { Form, Input, DatePicker, Radio, Button, Collapse, Space, Row, Col } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import { Store } from 'antd/lib/form/interface';

const { RangePicker } = DatePicker
const { Panel } = Collapse

const MyForm: React.FC = () => {
    const [form] = Form.useForm()

    const onFinish = (values: Store) => {
        console.log('Submitted values:', values)
    }

    const handleReset = () => {
        form.resetFields()
    }

    const collapseStyle = {
        border: '1px solid #aaa',
        borderRadius: '10px'
    }

    return (
        <section className="form">
            <h3 className="form__title">Журнал регламентов</h3>
            <Collapse style={collapseStyle} collapsible="header" defaultActiveKey={['1']} ghost expandIcon={({ isActive }) => (<CaretRightOutlined rotate={isActive ? -90 : 90} />)}>
                <Panel header="Фильтр" key="1">
                    <Form form={form} onFinish={onFinish} colon={false}>
                        <Row gutter={16}>
                            <Col span={6}>
                                <Form.Item name="field1" label="Ключ" labelCol={{ span: 24 }}>
                                    <Input placeholder="Введите значение" />
                                </Form.Item>
                            </Col>
                            <Col span={6}>
                                <Form.Item name="field2" label="Дата и время начала работ" labelCol={{ span: 24 }}>
                                    <RangePicker showTime={{ format: 'HH:mm' }} style={{ width: '100%' }} />
                                </Form.Item>
                            </Col>
                            <Col span={6}>
                                <Form.Item name="field3" label="Дата и время окончания работ" labelCol={{ span: 24 }}>
                                    <RangePicker showTime={{ format: 'HH:mm' }} style={{ width: '100%' }} />
                                </Form.Item>
                            </Col>
                            <Col span={6}>
                                <Form.Item name="field4" label="Вхождение/пересечение с периодами" labelCol={{ span: 24 }}>
                                    <RangePicker showTime={{ format: 'HH:mm' }} style={{ width: '100%' }} />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={16}>
                            <Col span={6}>
                                <Form.Item name="field5" label="График" labelCol={{ span: 24 }}>
                                    <Radio.Group>
                                        <Radio value={1}>Все</Radio>
                                        <Radio value={2}>Круглосуточно</Radio>
                                        <Radio value={3}>Ежедневно</Radio>
                                    </Radio.Group>
                                </Form.Item>
                            </Col>
                            <Col span={6}>
                                <Form.Item name="field6" label="Наименование объекта" labelCol={{ span: 24 }}>
                                    <Input placeholder="Введите значение" />
                                </Form.Item>
                            </Col>
                            <Col span={6}>
                                <Form.Item name="field7" label="Адрес объекта" labelCol={{ span: 24 }}>
                                    <Input placeholder="Введите значение" />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row justify="end" gutter={16}>
                            <Form.Item>
                                <Space>
                                    <Button onClick={handleReset}>Очистить</Button>
                                    <Button type="primary" htmlType="submit">Показать записи</Button>
                                </Space>
                            </Form.Item>
                        </Row>
                    </Form>
                </Panel>
            </Collapse>
        </section>
    )
}

export default MyForm;