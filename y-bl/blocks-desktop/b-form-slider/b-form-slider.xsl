<?xml version="1.0" encoding="utf-8"?>

<xsl:stylesheet version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:lego="https://lego.yandex-team.ru"
    xmlns:x="http://www.yandex.ru/xscript"
    exclude-result-prefixes=" lego x">

<xsl:template match="lego:b-form-slider">
    <div>
        <xsl:apply-templates select="." mode="lego:block-attributes"/>
        <xsl:apply-templates select="." mode="lego:js-params"/>

        <xsl:apply-templates select="lego:info"/>

        <xsl:apply-templates select="." mode="body"/>

        <xsl:apply-templates select="lego:scale"/>
    </div>
</xsl:template>

<xsl:template match="lego:b-form-slider" mode="body">
    <div>
        <xsl:attribute name="class">
            <xsl:copy-of select="concat(local-name(), '__body')"/>
        </xsl:attribute>
        <div class="b-form-slider__click" />
        <xsl:apply-templates select="." mode="lego:content"/>
    </div>
</xsl:template>

<xsl:template match="lego:b-form-slider" mode="lego:content">
    <xsl:apply-templates select="lego:range | lego:runner"/>
</xsl:template>

<!-- Микс -->
<xsl:template match="lego:b-form-slider" mode="lego:block-class-content">
    <xsl:apply-imports/>
    <xsl:text> i-bem</xsl:text>
</xsl:template>

<!-- Параметры -->
<xsl:template match="lego:b-form-slider" mode="lego:js-params-content">
    <xsl:apply-imports/>
    <xsl:apply-templates select="@min | @max | lego:scale" mode="lego:js-params-content"/>
</xsl:template>

<xsl:template match="lego:b-form-slider/@min | lego:b-form-slider/@max" mode="lego:js-params-content">
    <xsl:value-of select="concat(',', x:js-quote(local-name()), ':', .)"/>
</xsl:template>

</xsl:stylesheet>