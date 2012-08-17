<?xml version="1.0" encoding="utf-8"?>

<xsl:stylesheet version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:lego="https://lego.yandex-team.ru"
    xmlns:x="http://www.yandex.ru/xscript"
    exclude-result-prefixes=" lego x">


<xsl:template match="lego:b-form-slider/lego:info">
    <div>
        <xsl:apply-templates select="." mode="lego:block-attributes"/>
        <xsl:apply-templates select="." mode="lego:content"/>
    </div>
</xsl:template>

<xsl:template match="lego:b-form-slider/lego:info/text()"/>

<xsl:template match="lego:b-form-slider/lego:info/lego:b-form-input/text()"/>

<xsl:template match="lego:b-form-slider/lego:info/lego:title | lego:b-form-slider/lego:info/lego:unit">
    <span>
        <xsl:apply-templates select="." mode="lego:block-attributes"/>
        <xsl:apply-templates select="." mode="lego:content"/>
    </span>
</xsl:template>

<xsl:template match="lego:b-form-slider/lego:info/lego:b-form-input" mode="lego:block-class-content">
    <xsl:apply-imports/>
    <xsl:text> b-form-slider__input</xsl:text>
</xsl:template>

</xsl:stylesheet>