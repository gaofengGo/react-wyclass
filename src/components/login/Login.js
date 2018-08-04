import React, { Component } from 'react'
import Header from '@/common/header/Header'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
// import { Toast } from 'antd-mobile'
import './login.styl'
import { toastIt } from '@/common/toast/toast';

const FormItem = Form.Item;

// function successToast() {
//     Toast.success('登录成功!', 1);
// }

class Login extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                // console.log('Received values of form: ', values);
                this.login(values)
            }
        });

    }
    login(values) {
        if (values.userName === '123') {
            if(values.password === '123') {
                this.props.LoginIn(true)
                // successToast()
                toastIt('登录成功', 1500,{fontSize: '16px'})
                window.history.back();
            } else {
                alert('密码错误')
            }
        } else {
            alert('账号不存在')
        }
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="class-login">
                <Header title="登录" />
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <FormItem>
                        {getFieldDecorator('userName', {
                            rules: [{ required: true, message: '请输入账号!' }],
                        })(
                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="账号" />
                            )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: '请输入密码!' }],
                        })(
                            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
                            )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(
                            <Checkbox>记住账号</Checkbox>
                            )}
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in
                        </Button>
                    </FormItem>
                </Form>
            </div>
        )
    }
}
export default Form.create()(Login)