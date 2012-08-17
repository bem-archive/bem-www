<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:x="http://www.yandex.ru/xscript"
    xmlns:lego="https://lego.yandex-team.ru"
    exclude-result-prefixes=" x lego "
    version="1.0">

    <xsl:template match="lego:b-form-select">
        <span>
            <xsl:apply-templates select="." mode="lego:block-attributes"/>
            <xsl:apply-templates select="." mode="lego:js-params"/>
            <xsl:apply-templates select="." mode="lego:content"/>
        </span>
    </xsl:template>

    <xsl:template match="lego:b-form-select" mode="lego:block-class-content">
        <xsl:apply-imports/>
        <xsl:text> i-bem</xsl:text>
    </xsl:template>

    <xsl:template match="lego:b-form-select[not(@lego:layout)]" mode="lego:block-class-content">
        <xsl:apply-imports/>
        <xsl:text> b-form-select_layout_auto i-bem</xsl:text>
    </xsl:template>

    <xsl:template match="lego:b-form-select" mode="lego:js-params-content">
        <xsl:apply-imports/>
        <xsl:apply-templates select="." mode="lego:js-params-rows"/>
        <xsl:apply-templates select="." mode="lego:js-params-popup-mods"/>
    </xsl:template>

    <!-- ##################################################################### -->

    <xsl:template match="lego:b-form-select" mode="lego:js-params-rows"/>

    <xsl:template match="lego:b-form-select[@rows]" mode="lego:js-params-rows">
        <xsl:text>,rows:</xsl:text>
            <xsl:value-of select="x:js-quote(@rows)"/>
        <xsl:text></xsl:text>
    </xsl:template>

    <!-- ##################################################################### -->

    <xsl:template match="lego:b-form-select" mode="lego:js-params-popup-mods"/>

    <xsl:template match="lego:b-form-select[@lego:theme]" mode="lego:js-params-popup-mods">
        <xsl:text>,popupMods:{</xsl:text>
            <xsl:text>theme:</xsl:text>
            <xsl:apply-templates select="." mode="lego:js-params-popup-theme"/>
        <xsl:text>}</xsl:text>
    </xsl:template>

    <xsl:template match="lego:b-form-select[@lego:theme]" mode="lego:js-params-popup-theme">
        <xsl:value-of select="x:js-quote(@lego:theme)"/>
    </xsl:template>

    <xsl:template match="lego:b-form-select[@lego:theme='grey']" mode="lego:js-params-popup-theme">
        <xsl:text>'ffffff'</xsl:text>
    </xsl:template>

    <xsl:template match="lego:b-form-select[@lego:theme='black']" mode="lego:js-params-popup-theme">
        <xsl:text>'black'</xsl:text>
    </xsl:template>

    <!-- ##################################################################### -->

    <xsl:template match="lego:b-form-select/lego:select">
        <select>
            <xsl:apply-templates select="." mode="lego:block-attributes"/>

            <xsl:copy-of select="../@name | ../@id"/>
            <xsl:attribute name="tabindex">-1</xsl:attribute>

            <xsl:apply-templates select="." mode="lego:content"/>
        </select>
    </xsl:template>

    <xsl:template match="lego:b-form-select//lego:option">
        <option>
            <xsl:apply-templates select="." mode="lego:block-attributes"/>
            <xsl:apply-templates select="@*" mode="option-attrs"/>
            <xsl:apply-templates select="." mode="lego:content"/>
        </option>
    </xsl:template>

    <xsl:template match="lego:b-form-select//lego:option-group">
        <optgroup>
            <xsl:apply-templates select="." mode="lego:block-attributes"/>
            <xsl:apply-templates select="@*" mode="option-attrs"/>
            <xsl:apply-templates select="." mode="lego:content"/>
        </optgroup>
    </xsl:template>

    <xsl:template match="lego:b-form-select//lego:option/@* | lego:b-form-select//lego:option-group/@*" mode="option-attrs"/>

    <xsl:template
        match="lego:b-form-select//lego:option/@value | lego:b-form-select//lego:option-group/@label"
        mode="option-attrs">
        <xsl:copy-of select="."/>
    </xsl:template>

    <xsl:template
        match="lego:b-form-select//lego:option/@selected"
        mode="option-attrs">
        <xsl:attribute name="selected">selected</xsl:attribute>
    </xsl:template>

    <xsl:template
        match="lego:b-form-select//lego:option/@disabled | lego:b-form-select//lego:option-group/@disabled"
        mode="option-attrs">
        <xsl:attribute name="disabled">disabled</xsl:attribute>
    </xsl:template>

    <xsl:template match="lego:b-form-select[@lego:disabled]/lego:select" mode="lego:block-attributes">
        <xsl:apply-imports/>
        <xsl:attribute name="disabled">disabled</xsl:attribute>
    </xsl:template>

    <!-- ##################################################################### -->

    <xsl:template match="lego:b-form-select/lego:b-form-button" mode="lego:block-class-content">
        <xsl:apply-imports/>

        <!-- пробрасываем модификатор _disabled на кнопку -->
        <xsl:if test="parent::lego:b-form-select/@lego:disabled and not(@lego:disabled)">
            <xsl:value-of select="concat(' ', local-name(), '_disabled', '_', ../@lego:disabled)"/>
        </xsl:if>

        <xsl:text> b-form-select__button</xsl:text>
        <xsl:apply-templates select="." mode="lego:block-class-theme"/>
        <xsl:apply-templates select="." mode="lego:block-class-size"/>
    </xsl:template>

    <!-- XXX: (LEGO-6600,varankinv@) пробрасываем модификатор (класс) темы/размера с селекта на кнопку -->

    <xsl:template match="lego:b-form-select[@lego:theme]/lego:b-form-button" mode="lego:block-class-theme">
        <xsl:value-of select="concat(' b-form-button_theme_', ../@lego:theme)"/>
    </xsl:template>

    <xsl:template match="lego:b-form-select/lego:b-form-button[@lego:theme]" mode="lego:block-class-theme"/>

    <xsl:template match="lego:b-form-select[@lego:size]/lego:b-form-button" mode="lego:block-class-size">
        <xsl:value-of select="concat(' b-form-button_size_', ../@lego:size)"/>
    </xsl:template>

    <xsl:template match="lego:b-form-select/lego:b-form-button[@lego:size]" mode="lego:block-class-size"/>

    <!-- ##################################################################### -->

    <xsl:template match="lego:b-form-select/lego:b-form-button//lego:content" mode="lego:content">
        <xsl:apply-imports/>
        <i class="b-form-select__arrow">&#9660;</i>
    </xsl:template>

</xsl:stylesheet>
