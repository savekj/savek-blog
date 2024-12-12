"use client"

import Link from 'next/link'
import React from 'react'

import MUIDataTable, { MUIDataTableOptions } from "mui-datatables";
import { createTheme, ThemeProvider } from '@mui/material/styles'

const columns = [
    {
        name: "ชื่อโปรแกรม"
    },
    {
        name: "คำอธิบาย"
    },
    {
        name: "ขนาด"
    },
    {
        name: "ดาวน์โหลด",
        options: {
            customBodyRender: (value: string | undefined) => <a href={value} className='bg-rose-600 px-8 py-1 rounded-md'>คลิก</a>
        }
    },
    {
        name: "วิธีใช้งาน",
        options: {
            customBodyRender: (value: string | undefined) => <a href={value} className='bg-blue-600 px-8 py-1 rounded-md'>วีดีโอ</a>
        }
    }
];

const data = [
    ["AutoBackupExpress", "สำรองข้อมูลอัตโนมัติ", "297.94 KB", "https://www.dropbox.com/scl/fi/aoolncm93kl08rnwala48/AutoBackupExpress.zip?rlkey=wxwqp21fnd12v639beyocd5uk&st=tbylwy96&dl=1", "https://youtu.be/Y6nRyzimsOk"],
    ["BrowseExpress", "ดูข้อมูลในไฟล์ DBF", "704.58 KB", "https://www.dropbox.com/scl/fi/twxxus4xadp6ralte6b9x/BrowseExpress.zip?rlkey=no4f11v0d26dzp6hd28wzgs3n&st=c0y1k6oe&dl=1", "https://youtu.be/D8w9X_MXQl4"],
    ["ExpressCombine", "รวมฐานข้อมูลจาก 2 โฟลเดอร์", "129.68 KB", "https://www.dropbox.com/scl/fi/0qqqaequkqaxem5d7qoam/ExpressCombine.zip?rlkey=6v2x03p73843vxx7y3vaxdiuc&st=24j8ynz4&dl=1", "https://youtu.be/q_4i9Nv_zSI"],
    ["SimpleGraph", "ทำกราฟแบบง่ายๆ จากไฟล์รายงาน", "242.29 KB", "https://www.dropbox.com/scl/fi/mcono118cx2h3wbjnl4ot/SimpleGraph.zip?rlkey=09thw5a1dl6lvcva633mgh1fx&st=7kf8vmkt&dl=1", "https://youtu.be/9sW7tUI07nk"],
    ["ChangeServiceSettings", "ส่งข้อมูล Express ไปแสดงผลในมือถือ", "2.89 MB", "https://www.dropbox.com/scl/fi/dooprbt9887kpdupf09f9/ChangeServiceSettings.zip?rlkey=d8d83bgvrnmmihk8ecrros6pk&st=agyappmn&dl=0", "https://youtu.be/WtFIZJe10M8"],
];

const options: MUIDataTableOptions = {
    // filterType: 'checkbox',
    download: false,
    print: false,
    selectableRows: "none",
    rowsPerPage: 5,
    rowsPerPageOptions: [5, 10, 20, 30]
};

const DownloadPage = () => {

    const getMuiTheme = () => createTheme({
        typography: {
            fontFamily: "Helvetica",
        },
        palette: {
            background: {
                paper: "#1e293b",
                default: "#0f172a"
            },
            mode: "dark",
        },
        components: {
            MuiTableCell: {
                styleOverrides: {
                    head: {
                        padding: "10px 20px",
                    },
                    body: {
                        padding: "8px 15px",
                        color: '#e2e8f0'
                    },
                }
            }
        }
    })

    return (
        <div>
            <ThemeProvider theme={getMuiTheme()}>
                <MUIDataTable
                    title={"โปรแกรมเสริมเพื่อใช้งานร่วมกับ Express"}
                    data={data}
                    columns={columns}
                    options={options}
                />
            </ThemeProvider>
        </div>
    )
}

export default DownloadPage
