import React from "react";
import { Dropdown, Menu, Space, Typography, Button, version } from "antd";
import { DownOutlined } from '@ant-design/icons';
import "antd/dist/antd.css";

const menu = (
    <Menu
      selectable
      defaultSelectedKeys={['3']}
      items={[
        {
          key: '1',
          label: 'Эконом',
        },
        {
          key: '2',
          label: 'Бизнес',
        },
        {
          key: '3',
          label: 'Элит',
        },
      ]}
    />
  );

const SearchForm = () => (
<div className="search-form__inputs">
                        <input type="text" className="search-form__input" placeholder="Район, мкрн, метро или ЖК" />
                        <span className="search-form__separator">
                        </span>
                        <Dropdown overlay={menu}>
                            <Typography.Link>
                                <Space>
                                    Класс ЖК
                                    <DownOutlined />
                                </Space>
                            </Typography.Link>
                        </Dropdown>
                        <span className="search-form__separator">
                        </span>
                        <Dropdown overlay={menu}>
                            <Typography.Link>
                                <Space>
                                    Цена
                                    <DownOutlined />
                                </Space>
                            </Typography.Link>
                        </Dropdown>
                        <span className="search-form__separator">
                        </span>
                        <Dropdown overlay={menu}>
                            <Typography.Link>
                                <Space>
                                    Комнат
                                    <DownOutlined />
                                </Space>
                            </Typography.Link>
                        </Dropdown>
                        <span className="search-form__separator">
                        </span>
                        <Dropdown overlay={menu}>
                            <Typography.Link>
                                <Space>
                                    Срок сдачи
                                    <DownOutlined />
                                </Space>
                            </Typography.Link>
                        </Dropdown>
                    </div>

);

export default SearchForm;