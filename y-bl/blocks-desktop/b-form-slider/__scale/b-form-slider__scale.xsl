<?xml version="1.0" encoding="utf-8"?>

<xsl:stylesheet version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:lego="https://lego.yandex-team.ru"
    xmlns:x="http://www.yandex.ru/xscript"
    exclude-result-prefixes=" lego x">

<xsl:template match="lego:b-form-slider/lego:scale"/>

<xsl:template match="lego:b-form-slider/lego:scale" mode="lego:js-params-content">
    <xsl:value-of select="concat(',', x:js-quote(local-name()), ':[')"/>
        <xsl:apply-templates select="lego:mark" mode="lego:js-params-content"/>
    <xsl:text>]</xsl:text>
</xsl:template>

<xsl:template match="lego:b-form-slider//lego:mark" mode="lego:js-params-content">
    <xsl:if test="position() &gt; 1">,</xsl:if>
    <xsl:text>{</xsl:text>
    <xsl:apply-templates select="@percent | @value | @step | lego:label" mode="lego:js-params-content"/>
    <xsl:text>}</xsl:text>
</xsl:template>

<xsl:template match="lego:b-form-slider//lego:mark/lego:label |
                     lego:b-form-slider//lego:mark/@percent |
                     lego:b-form-slider//lego:mark/@value |
                     lego:b-form-slider//lego:mark/@step" mode="lego:js-params-content">
    <xsl:if test="position() &gt; 1">,</xsl:if>
    <xsl:value-of select="concat(x:js-quote(local-name()), ':', x:if(self::lego:label, x:js-quote(.), .))"/>
</xsl:template>

</xsl:stylesheet>