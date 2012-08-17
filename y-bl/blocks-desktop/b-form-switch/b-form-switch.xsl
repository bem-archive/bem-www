<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:x="http://www.yandex.ru/xscript"
    xmlns:lego="https://lego.yandex-team.ru"
    exclude-result-prefixes=" x lego "
    version="1.0">

<xsl:template match="lego:b-form-switch">
    <span>
        <xsl:apply-templates select="." mode="lego:block-attributes"/>
        <xsl:apply-templates select="." mode="lego:js-params"/>
        <xsl:apply-templates select="." mode="lego:inner"/>
    </span>
</xsl:template>

<xsl:template match="lego:b-form-switch" mode="lego:inner">
    <span class="b-form-switch__body b-form-switch__body_position_{x:if(count(lego:option[@lego:active = 'yes']/preceding-sibling::lego:option) = 0, 'left', 'right')}">
        <xsl:apply-templates select="." mode="lego:inner-content"/>
    </span>
</xsl:template>

<xsl:template match="lego:b-form-switch" mode="lego:inner-content">
    <span class="b-form-switch__button"/>
</xsl:template>

<xsl:template match="lego:b-form-switch/lego:option" mode="lego:id-content">
    <xsl:value-of select="@id"/>

    <xsl:if test="not(@id)">
        <xsl:value-of select="generate-id(.)"/>
    </xsl:if>
</xsl:template>

<xsl:template match="lego:b-form-switch/lego:option" mode="lego:label">
    <label hidefocus="true" unselectable="on">

        <xsl:variable name="position" select="x:if(count(preceding-sibling::lego:option) = 0, 'left', 'right')"/>

        <xsl:attribute name="for">
            <xsl:apply-templates select="." mode="lego:id-content"/>
        </xsl:attribute>

        <xsl:attribute name="class">
            <xsl:value-of select="concat('b-form-switch__label b-form-switch__label_position_', $position)"/>
            <xsl:if test="@lego:active = 'yes'"> b-form-switch__label_active_yes</xsl:if>
        </xsl:attribute>

        <input class="b-form-switch__input b-form-switch__input-{$position}" type="radio">

            <xsl:apply-templates select="." mode="lego:input-attributes"/>

            <xsl:attribute name="id">
                <xsl:apply-templates select="." mode="lego:id-content"/>
            </xsl:attribute>

            <xsl:attribute name="name">
                <xsl:value-of select="../@name"/>

                <xsl:if test="not(../@name)">
                    <xsl:value-of select="generate-id(..)"/>
                </xsl:if>
            </xsl:attribute>

            <xsl:if test="../@lego:disabled = 'yes'">
                <xsl:attribute name="disabled">disabled</xsl:attribute>
            </xsl:if>

            <xsl:if test="@lego:active = 'yes'">
                <xsl:attribute name="checked">checked</xsl:attribute>
            </xsl:if>
        </input>

        <xsl:apply-templates select="." mode="lego:label-content"/>
    </label>
</xsl:template>

<xsl:template match="lego:b-form-switch" mode="lego:block-class-content">
    <xsl:apply-imports/>
    <xsl:text> i-bem</xsl:text>
</xsl:template>

</xsl:stylesheet>
