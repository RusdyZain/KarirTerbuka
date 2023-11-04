import React from 'react'
import Header from '@/components/Header'
import ImageKomunitas from '@/components/komunitas/ImageKomunitas'
import Section from '@/components/komunitas/Section'
import CardKomunitas from '@/components/komunitas/CardKomunitas'

export default function Komunitas() {
    return (
        <div data-theme="light">
            <div style={{ position: 'fixed', width: '100%', top: 0, left: 0, zIndex: 999 }} className="bg-white">
                <Header />
            </div>
            <div className="mt-14">
                <ImageKomunitas />
            </div>
            <div className="py-20">
                <Section />
                <CardKomunitas />
            </div>
        </div>
    )
}
